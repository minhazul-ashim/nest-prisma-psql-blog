import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpvoteDto {
  @IsNotEmpty()
  blogId: number;

  @IsOptional()
  userId: number;
}
