import { IsInt, IsPositive } from 'class-validator';

export class CreateSaleDto {
  @IsInt()
  @IsPositive()
  bookId: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsInt()
  @IsPositive()
  total: number;
}
