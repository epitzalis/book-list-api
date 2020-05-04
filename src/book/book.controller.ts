import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book-dto';

@Controller('book')
export class BookController {

    @Post()
    create (@Body() createBookDto: CreateBookDto) {
        return 'Libro creado';
    }

    @Get()
    getAll () {
        return 'Lista libros';
    }

    @Put(':id')
    update (@Body() updateBookDto: CreateBookDto) {
        return 'Libro actualizado';
    }

    @Delete(':id')
    delete () {
        return 'Libro eliminado';
    }

}
