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
        return await this._bookRepository.find({order: {name: 'ASC'}});
    }

    async get(idBook: number): Promise<Book>  {
        return await this._bookRepository.findOne(idBook);
    }

    async createBook(newBook: BookDto): Promise<Book>  {
        const book = new Book();
        book.name = newBook.name;
        book.description = newBook.description;
        book.author = newBook.author;
        book.isbn = newBook.isbn;
        book.price = newBook.price;
        book.photoUrl = newBook.photoUrl;
        return await this._bookRepository.save(book);
    }

    async updateBook(idBook: number, updateBook: BookDto): Promise<Book> {
        const book = await this._bookRepository.findOne(idBook);
        book.name = updateBook.name;
        book.description = updateBook.description;
        book.author = updateBook.author;
        book.isbn = updateBook.isbn;
        book.price = updateBook.price;
        book.photoUrl = updateBook.photoUrl;
        return await this._bookRepository.save(book);
    }

    async deleteBook(idBook: number): Promise<any> {
        return await this._bookRepository.delete(idBook);
    }

}
