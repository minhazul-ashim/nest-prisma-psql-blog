import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.prismaClient.user.create({
      data: { email: dto.email, password: hash, name: dto.name },
    });
    return { msg: 'Success', user: user };
  }
}
