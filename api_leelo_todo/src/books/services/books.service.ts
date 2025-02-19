import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { Author } from '../entities/author.entity';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    let author = await this.authorRepository.findOne({
      where: { name: createBookDto.authorName },
    });

    if (!author) {
      author = this.authorRepository.create({ name: createBookDto.authorName });
      await this.authorRepository.save(author);
    }

    let category = await this.categoryRepository.findOne({
      where: { name: createBookDto.categoryName },
    });

    if (!category) {
      category = this.categoryRepository.create({
        name: createBookDto.categoryName,
      });
      await this.categoryRepository.save(category);
    }

    const book = this.bookRepository.create({
      name: createBookDto.name,
      author,
      category,
      basePrice: createBookDto.basePrice,
    });
    return await this.bookRepository.save(book);
  }

  async findOne(id: number) {
    return await this.bookRepository.findOneBy({ id });
  }

  async findByAuthorOrCategory(categoryId?: number, authorId?: number) {
    const query = this.bookRepository.createQueryBuilder('book');

    if (categoryId) {
      query.innerJoinAndSelect(
        'book.category',
        'category',
        'category.id = :categoryId',
        { categoryId },
      );
    }

    if (authorId) {
      query.innerJoinAndSelect(
        'book.author',
        'author',
        'author.id = :authorId',
        { authorId },
      );
    }

    if (!authorId && !categoryId) {
      return this.bookRepository.find();
    }

    return query.getMany();
  }
}
