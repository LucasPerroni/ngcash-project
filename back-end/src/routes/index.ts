import { Router } from "express"

import authRouter from "./authRouter.js"
import cashRouter from "./cashRouter.js"

const routes = Router()
routes.use(authRouter)
routes.use(cashRouter)

export default routes
