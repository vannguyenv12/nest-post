import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModal: Model<Post>) {}

  create() {
    const createdPost = new this.postModal({
      title: 'Post 1',
      description: 'Description 1',
    });

    return createdPost.save();
  }
}
