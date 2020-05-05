import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENVIRONMENT } from './environments/environment.prod';

@Module({
  imports: [
    TypeOrmModule.forRoot(ENVIRONMENT),
  ],
  controllers: [
    AppController,
    BookController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
