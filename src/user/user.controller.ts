import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDTO } from 'src/post/dtos/create-post.dto';

@Controller('users')
export class UserController {
  @Post()
  create(@Body() requestBody: CreatePostDTO) {
    return 'post';
  }

  @Get()
  getAll() {
    return 'get';
  }
}
