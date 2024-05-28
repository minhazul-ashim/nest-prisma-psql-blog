import { Module } from '@nestjs/common';
import { UpvoteController } from './upvote.controller';
import { UpvoteService } from './upvote.service';

@Module({
  controllers: [UpvoteController],
  providers: [UpvoteService],
})
export class UpvoteModule {}
