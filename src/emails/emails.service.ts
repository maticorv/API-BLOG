import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import * as Mail from 'nodemailer/lib/mailer';
import { createTransport } from 'nodemailer';

@Injectable()
export class EmailsService {
  nodemailerTransport: Mail;
  constructor(private readonly configService: ConfigService) {
    this.nodemailerTransport = createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASS'),
      }
    });
  }
  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  async sendMail(options: Mail.Options) {
    options.from = this.configService.get('EMAIL_USER');
    return await this.nodemailerTransport.sendMail(options);
  }

  findAll() {
    return this.nodemailerTransport.sendMail({
      to: 'matias.corvalan24@gmail.com',
      html: 'Hello Team! <br><br>This is a test email<br><br>Thanks,<br>',
      from: this.configService.get('EMAIL_USER'),
      subject: 'Email confirmation',
      text: 'This is a test email',
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
