import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';


@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  listAll() {
    return this.categoryService.listAll();
  }

  @Get(':id')
  getSingle(@Param('id') id: string) {
    return this.categoryService.getSingle(id);
  }

  @Post()
  store(@Body() body: CategoryDto) {
    return this.categoryService.store(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CategoryDto) {
    return this.categoryService.update(id, body);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.categoryService.destroy(id);
  }
}
