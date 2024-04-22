// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { User } from './types.user';

// @Injectable()
// export class UsersService {
//   constructor(private readonly prisma: PrismaService) {}

//   async findAll() {
//     return this.prisma.prismaClient.user.findMany();
//   }

//   async findOne(id: number) {
//     return this.prisma.prismaClient.user.findUnique({
//       where: { id },
//     });
//   }

//   async store(body: User) {
//     return this.prisma.prismaClient.user.create({ data: { ...body } });
//   }

//   async update(body: User) {
//     const { id, ...rest } = body;
//     return this.prisma.prismaClient.user.update({
//       where: { id: id },
//       data: { ...rest },
//     });
//   }

//   async destroy(id: number) {
//     console.log(id);
//     return this.prisma.prismaClient.user.delete({
//       where: { id },
//     });
//   }
// }
