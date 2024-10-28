import { Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts') // REST
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create() {
    return this.postService.create();
  }
}
