import { Expose } from 'class-transformer';

export class ResponsePostDTO {
  @Expose()
  _id: string;
  @Expose()
  title: string;
  @Expose()
  description: string;
}
