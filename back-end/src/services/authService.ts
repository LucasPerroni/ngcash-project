import { Users } from "@prisma/client"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import authRepository from "../repositories/authRepository.js"

async function createUser(data: Users) {
  data.password = bcrypt.hashSync(data.password, Number(process.env.BCRYPT_SALT))
  await authRepository.createUser(data)
}

const authService = {
  createUser,
}

export default authService
