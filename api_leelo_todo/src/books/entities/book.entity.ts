import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { Author } from './author.entity';
import { Sale } from './sale.entity';

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
