import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { PostService } from './post.service';

@Controller()
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
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
