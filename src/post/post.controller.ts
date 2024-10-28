import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDTO } from './dtos/create-post.dto';
import { ResponsePostDTO } from './dtos/response-post.dto';
import { PostService } from './post.service';

@Controller('posts') // REST
@TransformDTO(ResponsePostDTO)
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
