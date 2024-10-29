import { PartialType } from '@nestjs/swagger';
import { CreatePostDTO } from './create-post.dto';

export class UpdatePostPatchDTO extends PartialType(CreatePostDTO) {}
