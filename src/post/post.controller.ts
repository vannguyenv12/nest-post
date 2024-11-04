import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TransformDTO } from 'src/interceptors/transform-dto.interceptor';
import { CreatePostDTO } from './dtos/create-post.dto';
import { ResponsePostDTO } from './dtos/response-post.dto';
import { UpdatePostPatchDTO } from './dtos/update-post-patch.dto';
import { UpdatePostDTO } from './dtos/update-post.dto';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
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

  @Put('/:id') // update all fields -> PATCH  update one field
  update(@Param('id') id: string, @Body() requestBody: UpdatePostDTO) {
    return this.postService.update(id, requestBody);
  }

  @Patch('/:id')
  updateOne(@Param('id') id: string, @Body() requestBody: UpdatePostPatchDTO) {
    return this.postService.updateOne(id, requestBody);
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string) {
    return this.postService.deleteOne(id);
  }
}
