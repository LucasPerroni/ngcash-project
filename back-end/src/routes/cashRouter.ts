import { Router } from "express"

import validateSchema from "../middlewares/validateSchema.js"
import validateToken from "../middlewares/validateToken.js"
import cashController from "../controllers/cashController.js"

const cashRouter = Router()

cashRouter.get("/cash", validateToken, cashController.getAccount)

export default cashRouter
