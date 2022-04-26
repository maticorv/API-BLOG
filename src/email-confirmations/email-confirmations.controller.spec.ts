import { Test, TestingModule } from '@nestjs/testing';
import { EmailConfirmationsController } from './email-confirmations.controller';
import { EmailConfirmationsService } from './email-confirmations.service';

describe('EmailConfirmationsController', () => {
  let controller: EmailConfirmationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailConfirmationsController],
      providers: [EmailConfirmationsService],
    }).compile();

    controller = module.get<EmailConfirmationsController>(EmailConfirmationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
