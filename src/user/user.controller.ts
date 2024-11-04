import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from 'src/post/dtos/create-post.dto';

@ApiTags('users')
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
