import { IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(5)
  authorName: string;

  @IsString()
  @MinLength(5)
  categoryName: string;

  @IsOptional()
  @IsPositive()
  basePrice?: number;
}
