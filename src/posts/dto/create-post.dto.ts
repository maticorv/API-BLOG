import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';
export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsArray()
  @ArrayNotEmpty()
  paragraphs: string[];
}
