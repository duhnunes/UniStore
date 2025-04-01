import { Prisma } from '@prisma/client'

export class User implements Prisma.UserUncheckedCreateInput {
  id?: string | undefined
  name: string
  email: string
  password: string
  createdAt?: string | Date | undefined
  updatedAt?: string | Date | undefined
  Product?: Prisma.ProductUncheckedCreateNestedManyWithoutUserInput | undefined
}
