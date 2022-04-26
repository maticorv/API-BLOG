import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
    // EmailConfirmationsModule,
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     secret: configService.get('JWT_SECRET'),
    //     signOptions: {
    //       expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
    //     },
    //   }),
    // }),
    // ConfigModule,
    // EmailsModule,
    // JwtModule.register({}),
    // EmailConfirmationModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
