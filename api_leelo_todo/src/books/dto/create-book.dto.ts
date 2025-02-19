import { IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(5)
  name: string;

  @IsString()
  @MinLength(5)
  author: string;

  @IsString()
  @MinLength(5)
  category: string;
}
