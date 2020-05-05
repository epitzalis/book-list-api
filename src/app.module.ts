import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENVIRONMENT } from './environments/environment.prod';
import { BookService } from './book/book.service';
import { Book } from './book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(ENVIRONMENT),
    TypeOrmModule.forFeature([Book])
  ],
  controllers: [
    AppController,
    BookController
  ],
  providers: [
    AppService,
    BookService
  ],
})
export class AppModule {}
