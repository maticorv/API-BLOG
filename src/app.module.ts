import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`stage.${process.env.NODE_ENV}.env`],
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required() || process.env.POSTGRES_HOST,
        POSTGRES_PORT: Joi.number().required() || process.env.POSTGRES_PORT,
        POSTGRES_USER: Joi.string().required() || process.env.POSTGRES_USER,
        POSTGRES_PASSWORD:
          Joi.string().required() || process.env.POSTGRES_PASSWORD,
        POSTGRES_DB: Joi.string().required() || process.env.POSTGRES_DB,
        PORT: Joi.number() || process.env.PORT,
      })
    }),
    DatabaseModule,
    PostsModule,
    UsersModule,
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
