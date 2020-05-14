import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 150 })
  autor: string;

  @Column({ length: 20 })
  isbn: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('int', { nullable: true })
  punctuation: number;

  @Column('float')
  price: number;

}
