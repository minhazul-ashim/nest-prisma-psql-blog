import { Injectable } from '@nestjs/common';
import { CommentDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  errorResponse,
  notFoundResponse,
  successResponse,
} from 'src/helpers/responses';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}
  async store(body: CommentDto) {
    try {
      const data = await this.prisma.prismaClient.comment.create({
        data: body,
      });
      if (data) {
        return successResponse({ data: data });
      }
    } catch (error) {
      return errorResponse(error);
    }
  }

  async list() {
    try {
      const data = await this.prisma.prismaClient.comment.findMany({
        include: {
          creator: true,
          blog: true,
        },
      });
      if (data) {
        return successResponse({ data: data });
      }
    } catch (e) {
      return errorResponse(e);
    }
  }

  async get(id: string) {
    try {
      const data = await this.prisma.prismaClient.comment.findFirstOrThrow({
        where: { id: parseInt(id) },
        include: {
          creator: true,
          blog: true,
        },
      });
      if (data) {
        return successResponse(data);
      } else {
        return notFoundResponse();
      }
    } catch (e) {
      return errorResponse(e);
    }
  }

  async update(id: string, body: CommentDto) {
    try {
      const data = await this.prisma.prismaClient.comment.update({
        where: { id: parseInt(id) },
        data: { ...body },
      });
      return successResponse(data);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async destroy(id: string) {
    try {
      const deletedData = await this.prisma.prismaClient.comment.delete({
        where: { id: parseInt(id) },
      });
      return successResponse({ ...deletedData });
    } catch (e) {
      return errorResponse(e);
    }
  }
}
