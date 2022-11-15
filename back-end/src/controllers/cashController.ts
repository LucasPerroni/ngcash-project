import { Request, Response } from "express"

import cashService from "../services/cashService.js"

async function getAccount(req: Request, res: Response) {
  const { userId } = res.locals
  const account = await cashService.findAccountByUserId(userId)
  res.status(200).send(account)
}

const cashController = {
  getAccount,
}

export default cashController
