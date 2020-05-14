import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEntities(): string {
    return `
      <h2>Available entities:</h2>
      <ul>
        <li><a href="./book">/book</a></li>
      </ul>
    `;
  }
}
