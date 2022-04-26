import { Module } from '@nestjs/common';
import { EmailConfirmationsService } from './email-confirmations.service';
import { EmailConfirmationsController } from './email-confirmations.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { EmailsModule } from 'src/emails/emails.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ConfigModule, EmailsModule, JwtModule.register({}), UsersModule],
  controllers: [EmailConfirmationsController],
  providers: [EmailConfirmationsService]
})
export class EmailConfirmationsModule {}
