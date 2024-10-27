import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ForbiddenException } from 'src/exceptions/ForbiddenException';

const data = [
  {
    id: 1,
    title: 'Post 1',
    description: 'Post 1 description',
  },
  {
    id: 2,
    title: 'Post 2',
    description: 'Post 2 description',
  },
  {
    id: 3,
    title: 'Post 3',
    description: 'Post 3 description',
  },
];

@Injectable()
export class PostService {
  getAll() {
    return data;
  }

  getOne(id: number) {
    return data.find((post) => post.id === id);
  }
}
