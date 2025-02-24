import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() // GET /users or /users?role=INTERN & age <35
  findAll(@Query('role') role?: 'ADMIN' | 'INTERN' | 'DEVELOPER') {
    return this.usersService.findAll(role);
  }
  @Get(':id') //GET  /users/1
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Post() // POST  /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'ADMIN' | 'INTERN' | 'DEVELOPER';
    },
  ) {
    return this.usersService.create(user);
  }
  @Patch(':id') //PATCH  /users/1
  updateOne(
    @Param('id') id: string,
    @Body()
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'ADMIN' | 'DEVELOPER' | 'INTERN';
    },
  ) {
    return this.usersService.updateOne(+id, updatedUser);
  }
  @Delete(':id') // DELETE   /user/1
  deleteOne(@Param('id') id: string) {
    return this.usersService.delete(+id); //param always a string;so,(+id) turn to be a number
  }
}
