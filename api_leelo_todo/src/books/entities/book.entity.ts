import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Book {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column('decimal', { default: 3.12 })
  basePrice: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @ManyToOne(() => Category, (category) => category.books)
  category: Category;

  @OneToMany(() => Sale, (sale) => sale.book)
  sales: Sale[];
}

@Entity()
export class Author {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}

@Entity()
export class Category {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}

@Entity()
export class Sale {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  quantity: number;

  @Column('decimal')
  total: number;

  @CreateDateColumn()
  dateSale: Date;

  @ManyToOne(() => Book, (book) => book.sales)
  book: Book;
}
