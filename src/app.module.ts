import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TestRepository } from './test.repository';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, TestService, TestRepository],
})
export class AppModule {}
