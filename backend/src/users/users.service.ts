import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import slugify from 'slugify'
import { PrismaService } from 'src/prisma/prisma.service'

import { UserWhithoutPassword } from './@types/user.types'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserWhithoutPassword> {
    const slug = slugify(createUserDto.name, { lower: true }).replace(/-/g, '')
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
      slug,
    }

    const createUser = await this.prisma.user.create({ data })

    return {
      ...createUser,
      password: undefined,
    }
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  async findByFilters(filters: { email?: string; name?: string }) {
    const user = await this.prisma.user.findMany({
      where: {
        OR: [
          filters.email ? { email: filters.email } : {},
          filters.name
            ? { name: { contains: filters.name, mode: 'insensitive' } }
            : {},
        ],
      },
    })

    return user
  }

  async findUserBySlug(slug: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { slug } })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<UserWhithoutPassword> {
    const user = await this.prisma.user.findUnique({ where: { id } })

    if (!user) {
      throw new Error('User not found')
    }

    if (updateUserDto.password) {
      const isSamePassword = await bcrypt.compare(
        updateUserDto.password,
        user.password
      )

      if (isSamePassword) {
        delete updateUserDto.password
      } else {
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
      }
    }

    if (updateUserDto.name && updateUserDto.name !== user.name) {
      updateUserDto.slug = slugify(updateUserDto.name, { lower: true }).replace(
        /-/g,
        ''
      )
    }

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingEmail = await this.prisma.user.findUnique({
        where: { email: updateUserDto.email },
      })

      if (existingEmail) {
        throw new Error('Email already exists')
      }
    }

    const data: Prisma.UserUpdateInput = {
      ...updateUserDto,
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data,
    })

    return updatedUser
  }

  async remove(slug: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { slug } })

    if (!user) {
      throw new Error('User not found')
    }

    return this.prisma.user.delete({ where: { slug } })
  }
}
