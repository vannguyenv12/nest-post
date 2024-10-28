import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://vannguyenvn1212:vannguyenv12@postcluster.vjbbi.mongodb.net/post_db?retryWrites=true&w=majority&appName=PostCluster',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
