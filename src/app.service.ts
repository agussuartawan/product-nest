import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  helloName(name: string): string {
    return `hello ${name}`
  }

}
