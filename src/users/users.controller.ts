import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
// import { User } from './types.user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return this.usersService.destroy(parseInt(id));
  }
}
