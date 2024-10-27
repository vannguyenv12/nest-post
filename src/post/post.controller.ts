import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Req,
  Session,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { PostService } from './post.service';
import { User } from 'src/decorators/user.decorator';

@Controller()
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/posts')
  getAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @User() user: any,
  ) {
    console.log(page);
    console.log(limit);
    console.log(user);
    return this.postService.getAll();
  }

  @Get('/posts/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.postService.getOne(id);
  }
}
