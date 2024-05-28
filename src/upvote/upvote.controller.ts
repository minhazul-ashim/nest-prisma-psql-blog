import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UpvoteService } from './upvote.service';
import { UpvoteDto } from './dto';

@Controller('upvote')
export class UpvoteController {
  constructor(private readonly upvoteService: UpvoteService) {}

  @Get()
  listAll() {
    return this.upvoteService.list();
  }

  @Get('listByBlogId/:id')
  listByBlogId(@Param('id') id: string) {
    return this.upvoteService.listByBlog(id);
  }

  @Delete(':id')
  destroy(@Param(':id') id: string) {
    return this.upvoteService.delete(id);
  }

  @Post()
  store(@Body() body: UpvoteDto) {
    return this.upvoteService.store(body);
  }
}
