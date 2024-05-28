import { IsNotEmpty } from 'class-validator';

export class SubCategoryDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  categoryId: number;
}
