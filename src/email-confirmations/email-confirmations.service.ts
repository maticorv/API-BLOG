import { Injectable } from '@nestjs/common';
import { CreateEmailConfirmationDto } from './dto/create-email-confirmation.dto';
import { UpdateEmailConfirmationDto } from './dto/update-email-confirmation.dto';

@Injectable()
export class EmailConfirmationsService {
  create(createEmailConfirmationDto: CreateEmailConfirmationDto) {
    return 'This action adds a new emailConfirmation';
  }

  findAll() {
    return `This action returns all emailConfirmations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailConfirmation`;
  }

  update(id: number, updateEmailConfirmationDto: UpdateEmailConfirmationDto) {
    return `This action updates a #${id} emailConfirmation`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailConfirmation`;
  }
}
