import { Entity, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Book } from './book.entity';

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
