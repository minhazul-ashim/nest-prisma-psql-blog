import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';

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

  @UseGuards(AuthGuard)
  @Post()
  store(@Body() body: CategoryDto) {
    return this.categoryService.store(body);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: CategoryDto) {
    return this.categoryService.update(id, body);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.categoryService.destroy(id);
  }
}
