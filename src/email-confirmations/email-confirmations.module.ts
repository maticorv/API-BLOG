import { Module } from '@nestjs/common';
import { EmailConfirmationsService } from './email-confirmations.service';
import { EmailConfirmationsController } from './email-confirmations.controller';

@Module({
  controllers: [EmailConfirmationsController],
  providers: [EmailConfirmationsService]
})
export class EmailConfirmationsModule {}
