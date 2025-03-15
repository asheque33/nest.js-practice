import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ValidationPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/crete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() // GET /users or /users?role=INTERN & age <35
  findAll(@Query('role') role?: 'ADMIN' | 'INTERN' | 'DEVELOPER') {
    return this.usersService.findAll(role);
  }
  @Get(':id') //GET  /users/1
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Post() // POST  /users
  create(
    @Body(ValidationPipe)
    creteUserDto: CreateUserDto,
  ) {
    return this.usersService.create(creteUserDto);
  }
  @Patch(':id') //PATCH  /users/1
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateOne(id, updateUserDto);
  }
  @Delete(':id') // DELETE   /user/1
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id); //param always a string;so,(+id) turn to be a number
  }
}
