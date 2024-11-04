import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDTO {
  @ApiProperty({
    description: 'The title of post',
    default: 'Title 1',
  })
  @IsNotEmpty()
  title: string;
  @ApiProperty({
    description: 'The description of post',
    default: 'Description 1',
  })
  @IsNotEmpty()
  description: string;
}
