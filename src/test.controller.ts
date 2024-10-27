import { Controller, Get } from '@nestjs/common';

@Controller()
export class TestController {
  @Get('/products')
  findAllProducts() {
    return 'This is a list of products';
  }
}
