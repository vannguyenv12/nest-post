import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDocument } from './schemas/post.schema';
import { CreatePostDTO } from './dtos/create-post.dto';

@Controller('posts') // REST
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: CreatePostDTO) {
    return this.postService.create(requestBody);
  }
}

// DTO
