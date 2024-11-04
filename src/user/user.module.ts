import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [PostModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
