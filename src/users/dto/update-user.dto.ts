import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  phone: string;
}
export default UpdateUserDto;
