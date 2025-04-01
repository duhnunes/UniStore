import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'

import { User } from '../entities/user.entity'

export class CreateUserDto implements User {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/, {
    message: `Erro: A senha deve ter entre 8 a 20 caracteres, contendo ao menos:
      - 1 letra maiúscula
      - 1 letra minúscula
      - 1 número`,
  })
  password: string
}
