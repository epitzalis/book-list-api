import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { BookDto } from './dto/book-dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book) private readonly _bookRepository: Repository <Book>
    ) { }

    async getAll(): Promise<Book[]>  {
        return await this._bookRepository.find();
    }

    async get(idBook: number): Promise<Book>  {
        return await this._bookRepository.findOne(idBook);
    }

    async createBook(newBook: BookDto): Promise<Book>  {
        const book = new Book();
        book.name = newBook.name;
        book.description = newBook.description;
        book.autor = newBook.autor;
        book.punctuation = newBook.punctuation;
        return await this._bookRepository.save(book);
    }

    async updateBook(idBook: number, updateBook: BookDto): Promise<Book> {
        const book = await this._bookRepository.findOne(idBook);
        book.name = updateBook.name;
        book.description = updateBook.description;
        book.autor = updateBook.autor;
        book.punctuation = updateBook.punctuation;
        return await this._bookRepository.save(book);
    }

    async deleteBook(idBook: number): Promise<any> {
        return await this._bookRepository.delete(idBook);
    }

}
