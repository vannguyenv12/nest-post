import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://vannguyenvn1212:vannguyenv12@postcluster.vjbbi.mongodb.net/post_db?retryWrites=true&w=majority&appName=PostCluster',
    ),
    UserModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
