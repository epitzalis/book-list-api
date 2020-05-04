import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'http://192.168.64.2',
      port: 3306,
      username: 'nest',
      password: '1234',
      database: 'bookapp_db',
      entities: [ __dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, BookController],
  providers: [AppService],
})
export class AppModule {}
