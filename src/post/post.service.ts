import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDTO } from './dtos/create-post.dto';
import { UpdatePostDTO } from './dtos/update-post.dto';
import { UpdatePostPatchDTO } from './dtos/update-post-patch.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {} // 10 service

  async create(data: CreatePostDTO) {
    const createdPost = new this.postModel(data);

    const post = await createdPost.save(); // real entity

    return post;
  }

  async getAll() {
    const posts = await this.postModel.find();

    return posts;
  }

  async getOne(id: string) {
    const post = await this.postModel.findOne({ _id: id });

    if (!post) {
      throw new NotFoundException(`Post with ${id} not found`);
    }

    return post;
  }

  async update(id: string, requestBody: UpdatePostDTO) {
    const post = await this.getOne(id);

    post.title = requestBody.title;
    post.description = requestBody.description;

    return post.save();
  }

  async updateOne(id: string, requestBody: UpdatePostPatchDTO) {
    const post = await this.getOne(id);

    Object.assign(post, requestBody);

    return post.save();
  }

  async deleteOne(id: string) {
    await this.getOne(id); // check
    await this.postModel.deleteOne({ _id: id });
  }
}
