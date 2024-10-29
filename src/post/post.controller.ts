import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDTO } from './dtos/create-post.dto';
import { ResponsePostDTO } from './dtos/response-post.dto';
import { PostService } from './post.service';

@Controller('posts')
@TransformDTO(ResponsePostDTO)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: CreatePostDTO) {
    return this.postService.create(requestBody);
  }

  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.postService.getOne(id);
  }
}
