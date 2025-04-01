import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service'

import { UserWhithoutPassword } from './@tipes/user.types'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserWhithoutPassword> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    }

    const createUser = await this.prisma.user.create({ data })

    return {
      ...createUser,
      password: undefined,
    }
  }

  findAll() {
    return `This action returns all users`
  }

  async findByFilters(filters: { email?: string; name?: string }) {
    const user = await this.prisma.user.findMany({
      where: {
        email: filters.email,
        name: filters.name
          ? { contains: filters.name, mode: 'insensitive' }
          : undefined,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
