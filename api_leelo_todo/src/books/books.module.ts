import { Module } from '@nestjs/common';
import { BooksService } from './services/books.service';
import { BooksController } from './controllers/books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Category } from './entities/category.entity';
import { Sale } from './entities/sale.entity';
import { Author } from './entities/author.entity';
import { AuthorController } from './controllers/author.controller';
import { AuthorService } from './services/author.service';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { SaleController } from './controllers/sale.controller';
import { SaleService } from './services/sale.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Category, Author, Sale])],
  controllers: [
    BooksController,
    AuthorController,
    CategoryController,
    SaleController,
  ],
  providers: [BooksService, AuthorService, CategoryService, SaleService],
})
export class BooksModule {}
