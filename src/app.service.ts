import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getHello2(id: number): string {
    return `Hello World 2! ${id}`;
  }

  getHello3(data: object) {
    return data;
  }
  
  getHello4(id: number, data: object) {
    return [{"id": id}, data];
  }
}
