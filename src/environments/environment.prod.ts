import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ENVIRONMENT: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'database-book.ccu6qh1jj6vc.us-east-1.rds.amazonaws.com',
    // host: 'localhost',
    port: 3306,
    username: 'nest',
    password: 'node1890',
    database: 'bookappdb',
    entities: [ __dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
  };