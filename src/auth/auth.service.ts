import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // private readonly emailsConfirmationService: EmailConfirmationsService, // private readonly emailsService: EmailsService, // private jwtService: JwtService,
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
