import { Router } from "express"

import validateSchema from "../middlewares/validateSchema.js"
import validateToken from "../middlewares/validateToken.js"
import { cashOutSchema } from "../schemas/cashOutSchema.js"
import cashController from "../controllers/cashController.js"

const cashRouter = Router()

cashRouter.get("/cash", validateToken, cashController.getAccount)
cashRouter.post("/cash/transaction", validateToken, validateSchema(cashOutSchema), cashController.cashOut)
cashRouter.get("/cash/transaction", validateToken, cashController.viewTransactions)

export default cashRouter
