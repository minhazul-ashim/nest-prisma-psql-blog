import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubCategoryDto } from './dto';
import {
  errorResponse,
  notFoundResponse,
  successResponse,
} from 'src/helpers/responses';

@Injectable()
export class SubcategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    try {
      const listedSubCats = await this.prisma.prismaClient.subCategory.findMany(
        { include: { category: true } },
      );
      return successResponse(listedSubCats);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async getSingle(id: string) {
    try {
      const foundSubCat =
        await this.prisma.prismaClient.subCategory.findFirstOrThrow({
          where: { id: parseInt(id) },
          include: { category: true },
        });
      if (!foundSubCat) {
        return notFoundResponse();
      }
      return successResponse(foundSubCat);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async store(body: SubCategoryDto) {
    try {
      const newSubcat = await this.prisma.prismaClient.subCategory.create({
        data: body,
      });
      return successResponse(newSubcat);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async update(id: string, body: SubCategoryDto) {
    try {
      const updatedSubCat = await this.prisma.prismaClient.subCategory.update({
        where: { id: parseInt(id) },
        data: body,
      });
      return successResponse(updatedSubCat);
    } catch (e) {
      return errorResponse(e);
    }
  }

  async destroy(id: string) {
    try {
      const deletedSubCat = await this.prisma.prismaClient.subCategory.delete({
        where: { id: parseInt(id) },
      });
      return successResponse(deletedSubCat);
    } catch (e) {
      return errorResponse(e);
    }
  }
}
