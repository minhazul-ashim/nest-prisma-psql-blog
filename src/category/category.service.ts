import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto';
import {
  errorResponse,
  notFoundResponse,
  successResponse,
} from 'src/helpers/responses';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async listAll() {
    try {
      const listedCategories =
        await this.prismaService.prismaClient.category.findMany({
          include: {
            Blog: true,
          },
        });
      return successResponse(listedCategories);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async getSingle(id: string) {
    try {
      const foundCategory =
        await this.prismaService.prismaClient.category.findFirstOrThrow({
          where: { id: parseInt(id) },
          include: {
            Blog: true,
          },
        });
      if (foundCategory) {
        return successResponse(foundCategory);
      }
      return notFoundResponse();
    } catch (e) {
      return errorResponse(e);
    }
  }

  async store(body: CategoryDto) {
    try {
      const storedCategory =
        await this.prismaService.prismaClient.category.create({ data: body });
      return successResponse(storedCategory);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async update(id: string, body: CategoryDto) {
    try {
      const updatedCategory =
        await this.prismaService.prismaClient.category.update({
          where: { id: parseInt(id) },
          data: body,
        });
      return successResponse(updatedCategory);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async destroy(id: string) {
    try {
      const deletedCategory =
        await this.prismaService.prismaClient.category.delete({
          where: { id: parseInt(id) },
        });
      return successResponse(deletedCategory);
    } catch (e) {
      return errorResponse(e);
    }
  }
}
