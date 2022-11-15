import { Users } from "@prisma/client"
import { Request, Response } from "express"

import authService from "../services/authService.js"

async function SignUp(req: Request, res: Response) {
  const body: Users = req.body
  await authService.createUser(body)
  res.sendStatus(201)
}

async function SignIn(req: Request, res: Response) {
  const body: Users = req.body

  const user = await authService.findUser(body)
  const token = await authService.generateToken(user)

  delete user.password
  res.status(200).send({ token, user })
}

const authController = {
  SignUp,
  SignIn,
}

export default authController
