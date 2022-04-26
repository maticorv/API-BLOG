import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailsService } from 'src/emails/emails.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly emailsService: EmailsService,
    private jwtService: JwtService, // private readonly emailsConfirmationService: EmailConfirmationsService, // private readonly emailsService: EmailsService, // private jwtService: JwtService,
  ) {}

  async signUp(createAuthDto: CreateAuthDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);
    try {
      const createdUser = await this.usersService.create({
        ...createAuthDto,
        password: hashedPassword,
      });
      // await this.emailsConfirmationService.sendVerificationLink(
      //   createAuthDto.email,
      // );
      return createdUser;
    } catch (error) {
      switch (error.code) {
        // duplicate email
        case '23505':
          throw new ConflictException('email already excists');
          break;
        default:
          throw new InternalServerErrorException();
          break;
      }
    }
  }

  async signIn(
    loginAuthDto: LoginAuthDto,
    ip: string,
  ): Promise<{ access_token: string; user: any }> {
    try {
      const { email, password } = loginAuthDto;
      const user = await this.usersService.getByEmail(email);
      await this.verifyPassword(password, user.password);
      user.password = undefined;
      const payload: TokenPayloadDto = { email };
      if (user.ip !== ip) {
        await this.usersService.updateIp(email, ip);
        const date = new Date();
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth();
        const day = date.getUTCDate();
        const hour = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const text = `Hello,
        We detected an attempt to access your account, (matias.corvalan@aden.org), from an unrecognized IP address:
        ------------------------------------------
        Time: ${year}-${month}-${day}  ${hour}:${minutes}:${seconds} UTC
        IP Address: ${ip}
        Browser:
        ------------------------------------------
        If this was not an authorized login, please change your password and enable two-factor authentication on your account page at https://dash.cloudflare.com/profile.
        If you have any questions or concerns, please contact Cloudflare support at https://support.cloudflare.com/.
        Thanks,
        The FinancialEmpire Team
        `;
        this.emailsService.sendMail({
          to: email,
          subject: 'Nuevo inicio de sesión',
          text,
        });
      }
      return {
        user: user,
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
