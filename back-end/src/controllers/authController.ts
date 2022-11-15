import { Users } from "@prisma/client"
import { Request, Response } from "express"

import authService from "../services/authService.js"

async function SignUp(req: Request, res: Response) {
  const body: Users = req.body
  await authService.createUser(body)
  res.sendStatus(201)
}

const authController = {
  SignUp,
}

export default authController
