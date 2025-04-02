import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findUser(@Query('email') email?: string, @Query('name') name?: string) {
    if (!email && !name) {
      return this.usersService.findAll()
    }
    return this.usersService.findByFilters({ email, name })
  }

  @Get(':slug')
  findSlug(@Param('slug') slug: string) {
    return this.usersService.findUserBySlug(slug)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log(`Update user ${id}: `, updateUserDto)
    return this.usersService.update(id, updateUserDto)
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.usersService.remove(slug)
  }
}
