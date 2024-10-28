import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDTO } from './dtos/create-post.dto';
import { ResponsePostDTO } from './dtos/response-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: CreatePostDTO) {
    const createdPost = new this.postModel(data);

    const post = await createdPost.save(); // real entity

    return post;
  }

  async getAll() {
    const posts = await this.postModel.find();

    return posts;
  }
}
