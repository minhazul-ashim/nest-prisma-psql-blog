import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
