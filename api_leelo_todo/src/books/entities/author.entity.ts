import { Column, OneToMany, Entity } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Author {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
