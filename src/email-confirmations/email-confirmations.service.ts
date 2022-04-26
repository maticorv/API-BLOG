import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadDto } from 'src/auth/dto/token-payload.dto';
import { EmailsService } from 'src/emails/emails.service';
import User from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import ConfirmEmailDto from './dto/confimEmail.dto';
import { CreateEmailConfirmationDto } from './dto/create-email-confirmation.dto';
import { UpdateEmailConfirmationDto } from './dto/update-email-confirmation.dto';

@Injectable()
export class EmailConfirmationsService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly emailsService: EmailsService,
    private readonly usersService: UsersService,
  ) {}

  async create(createEmailConfirmationDto: CreateEmailConfirmationDto) {
    return 'This action adds a new emailConfirmation';
  }
  async decodeConfirmationToken(confirmEmailDto: ConfirmEmailDto) {
    try {
      const payload = await this.jwtService.verify(confirmEmailDto.token, {
        secret: this.configService.get('JWT_SECRET'),
      });
      if (typeof payload === 'object' && 'email' in payload) {
        return payload.email;
      }
      throw new BadRequestException();
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email confirmation token expired');
      }
      throw new BadRequestException('Bad confirmation token');
    }
  }
  async confirmEmail(email: string) {
    const user = await this.usersService.getByEmail(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.usersService.markEmailAsConfirmed(email);
  }
  async resendConfirmationLink(user: User) {;
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await await this.sendVerificationLink(user.email);
  }

  public async sendVerificationLink(email: string) {
    const payload: TokenPayloadDto = { email };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: `${this.configService.get('JWT_EXPIRATION_TIME')}s`,
    });
    const url = `${this.configService.get(
      'EMAIL_CONFIRMATION_URL',
    )}?token=${token}`;

    const text = `Welcome to the application. To confirm the email address, click here: ${url}`;

    return await this.emailsService.sendMail({
      to: email,
      subject: 'Email confirmation',
      text,
    });
  }

  // findAll() {
  //   return `This action returns all emailConfirmations`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} emailConfirmation`;
  // }

  // update(id: number, updateEmailConfirmationDto: UpdateEmailConfirmationDto) {
  //   return `This action updates a #${id} emailConfirmation`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} emailConfirmation`;
  // }
}
