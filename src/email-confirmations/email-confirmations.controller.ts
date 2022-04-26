import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailConfirmationsService } from './email-confirmations.service';
import { CreateEmailConfirmationDto } from './dto/create-email-confirmation.dto';
import { UpdateEmailConfirmationDto } from './dto/update-email-confirmation.dto';

@Controller('email-confirmations')
export class EmailConfirmationsController {
  constructor(private readonly emailConfirmationsService: EmailConfirmationsService) {}

  @Post()
  create(@Body() createEmailConfirmationDto: CreateEmailConfirmationDto) {
    return this.emailConfirmationsService.create(createEmailConfirmationDto);
  }

  @Get()
  findAll() {
    return this.emailConfirmationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailConfirmationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailConfirmationDto: UpdateEmailConfirmationDto) {
    return this.emailConfirmationsService.update(+id, updateEmailConfirmationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailConfirmationsService.remove(+id);
  }
}
