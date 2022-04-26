import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
import { TokenPayloadDto } from '../dto/token-payload.dto';
import { TokenPayloadResponseDto } from '../dto/token-payload-response.dto';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private usersService: UsersService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: TokenPayloadDto): Promise<TokenPayloadResponseDto> {
    const { email } = payload;
    const user = await this.usersService.getByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return { user };
  }
}
