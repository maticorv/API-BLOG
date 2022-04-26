import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [EmailsController],
  providers: [EmailsService, ConfigService]
})
export class EmailsModule {}
