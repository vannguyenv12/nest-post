import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
} from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function TransformDTO<T>(dto: ClassConstructor<T>) {
  return UseInterceptors(new TransformDTOInterceptor(dto));
}

@Injectable()
export class TransformDTOInterceptor<T> implements NestInterceptor {
  constructor(private readonly dtoClass: ClassConstructor<T>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return plainToInstance(this.dtoClass, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
