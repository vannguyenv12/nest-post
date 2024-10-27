import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/posts')
  getAll() {
    return this.postService.getAll();
  }

  @Get('/posts/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.postService.getOne(id);
  }
}
