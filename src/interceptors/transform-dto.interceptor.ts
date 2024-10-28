import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponsePostDTO } from 'src/post/dtos/response-post.dto';

@Injectable()
export class TransformDTOInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return plainToInstance(ResponsePostDTO, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
