import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './crete-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
