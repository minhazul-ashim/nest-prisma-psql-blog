import { IsNotEmpty } from 'class-validator';

export class CommentDto {
  @IsNotEmpty()
  comment: string;

  @IsNotEmpty()
  createdBy: number;

  @IsNotEmpty()
  blogId: number;
}
