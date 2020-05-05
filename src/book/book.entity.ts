import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 150 })
  autor: string;

  @Column('text')
  description: string;

  @Column('int')
  punctuation: number;

}
