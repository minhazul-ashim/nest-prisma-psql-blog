import { Injectable } from '@nestjs/common';
import { errorResponse, successResponse } from 'src/helpers/responses';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpvoteDto } from './dto';

@Injectable()
export class UpvoteService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    try {
      const listAllUpvotes = await this.prisma.prismaClient.upvote.findMany();
      return successResponse(listAllUpvotes);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async listByBlog(blogId: string) {
    try {
      const listUpvotesByBlogId =
        await this.prisma.prismaClient.upvote.findMany({
          where: { blogId: parseInt(blogId) },
        });
      return successResponse(listUpvotesByBlogId);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async store(body: UpvoteDto) {
    try {
      const newUpvote = await this.prisma.prismaClient.upvote.create({
        data: body,
      });
      return successResponse(newUpvote);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async delete(id: string) {
    try {
      const deletedUpvote = await this.prisma.prismaClient.upvote.delete({
        where: { id: parseInt(id) },
      });
      return successResponse(deletedUpvote);
    } catch (e) {
      return errorResponse(e);
    }
  }
}
