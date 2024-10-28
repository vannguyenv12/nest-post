import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dtos/create-post.dto';
import { TransformDTOInterceptor } from 'src/interceptors/transform-dto.interceptor';

@Controller('posts') // REST
@UseInterceptors(TransformDTOInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: CreatePostDTO) {
    return this.postService.create(requestBody);
  }

  @Get()
  getAll() {
    // Convert to DTO
    return this.postService.getAll();
  }
}

// DTO
