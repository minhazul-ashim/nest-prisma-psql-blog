import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  blogContent: string;
  @IsNotEmpty()
  postedBy: number;

  thumbail?: string;
}
