import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { PrismaService } from './prisma/prisma.service';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({ envFilePath: ['.env'], isGlobal: true }),
    BlogModule,
    CommentModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
