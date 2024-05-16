import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Paramtype,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommentService } from './comment.service';
import { CommentDto } from './dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @UseGuards(AuthGuard)
  @Post('/')
  store(@Body() body: CommentDto) {
    return this.commentService.store(body);
  }

  @Get()
  list() {
    return this.commentService.list();
  }

  @Get(':id')
  getSingle(@Param('id') id: string) {
    return this.commentService.get(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CommentDto) {
    return this.commentService.update(id, body);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.commentService.destroy(id);
  }
}
