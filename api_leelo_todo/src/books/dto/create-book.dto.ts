import { IsDecimal, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(5)
  name: string;

  @IsString()
  @MinLength(5)
  authorName: string;

  @IsString()
  @MinLength(5)
  categoryName: string;

  @IsOptional()
  @IsDecimal()
  basePrice?: number;
}
