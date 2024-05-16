import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { errorResponse, successResponse } from 'src/helpers/responses';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    try {
      const allBlogs = await this.prisma.prismaClient.blog.findMany({
        include: {
          user: true,
        },
      });
      return successResponse(allBlogs);
    } catch (error) {
      return errorResponse(error);
    }
  }

  async getSingle(id: string) {
    try {
      const retrievedBlog =
        await this.prisma.prismaClient.blog.findFirstOrThrow({
          where: { id: parseInt(id) },
          include: {
            user: true,
          },
        });
      return successResponse(retrievedBlog);
    } catch (error) {
      return errorResponse(error);
    }
  }

  async store(body: BlogDto) {
    try {
      const payload = { ...body };
      const newBlog = await this.prisma.prismaClient.blog.create({
        data: payload,
      });
      return successResponse(newBlog);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async update(id: string, body: BlogDto) {
    try {
      const updatedBlog = await this.prisma.prismaClient.blog.update({
        where: { id: parseInt(id) },
        data: { ...body },
      });
      return successResponse(updatedBlog);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async destroy(id: string) {
    try {
      const deletedBlog = await this.prisma.prismaClient.blog.delete({
        where: { id: parseInt(id) },
      });
      return successResponse(deletedBlog);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
