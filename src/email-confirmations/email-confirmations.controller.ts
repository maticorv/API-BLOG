import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmailConfirmationsService } from './email-confirmations.service';
import { GetUser } from 'src/shared/decorators/get-user.decorator';
import User from 'src/users/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/shared/decorators/public.decorator';

@Controller('email-confirmations')
@ApiTags('email-confirmations')
export class EmailConfirmationsController {
  constructor(
    private readonly emailConfirmationsService: EmailConfirmationsService,
  ) {}

  @Get('confirm')
  @Public()
  async create(@Query() query) {
    const email = await this.emailConfirmationsService.decodeConfirmationToken(
      query,
    );
    await this.emailConfirmationsService.confirmEmail(email);
    // retornar redireccion a email ha sido confirmado
  }

  @Post('resend-confirmation-link')
  @Public()
  async resendConfirmationLink(@GetUser() user: User) {
    await this.emailConfirmationsService.resendConfirmationLink(user);
  }

  // @Get()
  // findAll() {
  //   return this.emailConfirmationsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.emailConfirmationsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateEmailConfirmationDto: UpdateEmailConfirmationDto,
  // ) {
  //   return this.emailConfirmationsService.update(
  //     +id,
  //     updateEmailConfirmationDto,
  //   );
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emailConfirmationsService.remove(+id);
  // }
}
