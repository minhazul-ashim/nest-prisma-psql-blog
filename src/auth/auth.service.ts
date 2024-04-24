import {
  ForbiddenException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { AuthDto, LoginDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.prismaClient.user.create({
      data: { email: dto.email, password: hash, name: dto.name },
    });
    return { msg: 'Success', user: user };
  }

  async signin(dto: LoginDto) {
    const { email, password } = dto;

    const user = await this.prisma.prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException();
    }

    const verify = await argon.verify(user.password, password);

    if (!verify) {
      throw new ForbiddenException();
    }

    const tokenData = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(tokenData);

    return { success: true, token: token };
  }
}
