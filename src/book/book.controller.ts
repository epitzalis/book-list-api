import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { BookDto } from './dto/book-dto';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('book')
export class BookController {

    constructor(
        private readonly _bookService: BookService
    ) {}

    @Post()
    create (@Body() createBookDto: BookDto, @Res() response) {
        return this._bookService.createBook(createBookDto).then( (book: Book) => {
            response.status(HttpStatus.CREATED).json(book);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error creating book'});
        });
    }

    @Get()
    getAll (@Res() response) {
        return this._bookService.getAll().then( (bookList: Book[]) => {
            response.status(HttpStatus.OK).json(bookList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error getting books'});
        });
    }

    @Get(':id')
    get (@Res() response, @Param('id') idBook) {
        return this._bookService.get(idBook).then( (book: Book) => {
            response.status(HttpStatus.OK).json(book);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error getting book'});
        });
    }

    @Put(':id')
    update (@Body() updateBookDto: BookDto, @Res() response, @Param('id') idBook) {
        return this._bookService.updateBook(idBook, updateBookDto).then( (book: Book) => {
            response.status(HttpStatus.OK).json(book);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error updating book'});
        });
    }

    @Delete(':id')
    delete (@Res() response, @Param('id') idBook) {
        return this._bookService.deleteBook(idBook).then( () => {
            response.status(HttpStatus.OK).json({message: 'Book updated successfully'});
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error deleting book'});
        });
    }

}
