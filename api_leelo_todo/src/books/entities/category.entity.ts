import { Entity, Column, OneToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Category {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}
