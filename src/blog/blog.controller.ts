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
import { BlogService } from './blog.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { BlogDto } from './dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogservice: BlogService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.blogservice.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param() { id }: { id: string }) {
    return this.blogservice.getSingle(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param() { id }: { id: string }, @Body() body: BlogDto) {
    return this.blogservice.update(id, body);
  }

  @UseGuards(AuthGuard)
  @Post()
  store(@Body() body: BlogDto) {
    return this.blogservice.store(body);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  destroy(@Param() { id }: { id: string }) {
    return this.blogservice.destroy(id);
  }
}
