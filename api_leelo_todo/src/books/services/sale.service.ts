import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from '../entities/sale.entity';
import { Repository } from 'typeorm';
import { CreateSaleDto } from '../dto/create-sale.dto';
import { Book } from '../entities/book.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale) private readonly saleRepository: Repository<Sale>,
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async createSale(createSaleDto: CreateSaleDto) {
    const bookId = await this.bookRepository.findOneBy({
      id: createSaleDto.bookId,
    });

    if (!bookId) {
      throw new Error('book not exist or not find');
    }

    const sale = this.saleRepository.create({
      quantity: createSaleDto.quantity,
      book: bookId,
    });
    return await this.saleRepository.save(sale);
  }

  async getTotalByMonth(): Promise<any[]> {
    return await this.saleRepository
      .createQueryBuilder('sale')
      .select('book.id', 'book_id')
      .addSelect('book.name', 'book_name')
      .addSelect('book.basePrice', 'book_basePrice')
      .addSelect('book.authorId', 'book_authorId')
      .addSelect('book.categoryId', 'book_categoryId')
      .addSelect("strftime('%m', sale.dateSale)", 'month')
      .addSelect('SUM(sale.quantity * book.basePrice)', 'total')
      .innerJoin('sale.book', 'book')
      .groupBy('book.id')
      .addGroupBy("strftime('%m', sale.dateSale)")
      .getRawMany();
  }
}
