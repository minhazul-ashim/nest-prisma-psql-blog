// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Put,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { User } from './types.user';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(parseInt(id));
//   }

//   @Post()
//   store(@Body() createUserInput: User) {
//     return this.usersService.store(createUserInput);
//   }

//   @Put()
//   update(@Body() updateUserInput: User) {
//     return this.usersService.update(updateUserInput);
//   }

//   @Delete(':id')
//   async destroy(@Param('id') id: string) {
//     return this.usersService.destroy(parseInt(id));
//   }
// }
