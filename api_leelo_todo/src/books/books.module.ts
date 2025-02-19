import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author, Book, Category } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Category, Author])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
