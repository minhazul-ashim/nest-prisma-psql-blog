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
import { SubcategoryService } from './subcategory.service';
import { SubCategoryDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Get()
  list() {
    return this.subcategoryService.list();
  }

  @Get(':id')
  getSingle(@Param('id') id: string) {
    return this.subcategoryService.getSingle(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  store(@Body() body: SubCategoryDto) {
    return this.subcategoryService.store(body);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: SubCategoryDto) {
    return this.subcategoryService.update(id, body);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.subcategoryService.destroy(id);
  }
}
