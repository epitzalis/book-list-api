import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {

  // @PrimaryGeneratedColumn('uuid')
  // readonly id: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150, nullable: true })
  name: string;

  @Column({ length: 150 })
  author: string;

  @Column({ length: 20, unique: true })
  isbn: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('float')
  price: number;

}
