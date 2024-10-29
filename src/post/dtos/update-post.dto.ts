import { IsNotEmpty } from 'class-validator';

export class UpdatePostDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
