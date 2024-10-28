import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDTO } from './dtos/create-post.dto';
import { ResponsePostDTO } from './dtos/response-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: CreatePostDTO): Promise<ResponsePostDTO> {
    const createdPost = new this.postModel(data);

    const post = await createdPost.save();

    const postDto = new ResponsePostDTO();
    postDto._id = post._id.toString();
    postDto.title = post.title;
    postDto.description = post.description;

    return postDto;
  }
}
