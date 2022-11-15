import { Users } from "@prisma/client"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import authRepository from "../repositories/authRepository.js"
import { Error } from "../middlewares/errorHandler.js"

async function createUser(data: Users) {
  data.password = bcrypt.hashSync(data.password, Number(process.env.BCRYPT_SALT))
  await authRepository.createUser(data)
}

async function findUser(data: Users) {
  const user = await authRepository.findUserByUserName(data.username)

  if (!bcrypt.compareSync(data.password, user.password)) {
    Error.errorUnauthorized("Wrong password")
  }

  return user
}

async function generateToken(user: Partial<Users>) {
  const data = { userId: user.id }
  const key = process.env.JWT_KEY
  const config = { expiresIn: 60 * 60 * 24 } // 24 hours

  const token = jwt.sign(data, key, config)
  return token
}

const authService = {
  createUser,
  findUser,
  generateToken,
}

export default authService
