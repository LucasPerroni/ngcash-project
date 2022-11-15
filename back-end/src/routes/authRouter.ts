import { Router } from "express"

import authController from "../controllers/authController.js"
import validateSchema from "../middlewares/validateSchema.js"
import { signUpSchema } from "../schemas/signUpSchema.js"

const authRouter = Router()

authRouter.post("/sign-up", validateSchema(signUpSchema), authController.SignUp)

export default authRouter
