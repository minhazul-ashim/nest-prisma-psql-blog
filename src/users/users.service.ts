import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { User } from './types.user';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.prismaClient.user.findMany({
      include: {
        blogs: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.prismaClient.user.findUnique({
      where: { id },
      include: {
        blogs: true,
      },
    });
  }

  async destroy(id: number) {
    return this.prisma.prismaClient.user.delete({
      where: { id },
    });
  }
}
