import { Test, TestingModule } from '@nestjs/testing';
import { EmailConfirmationsService } from './email-confirmations.service';

describe('EmailConfirmationsService', () => {
  let service: EmailConfirmationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailConfirmationsService],
    }).compile();

    service = module.get<EmailConfirmationsService>(EmailConfirmationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
