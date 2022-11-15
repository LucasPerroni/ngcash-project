import { Request, Response } from "express"

import cashService from "../services/cashService.js"

async function getAccount(req: Request, res: Response) {
  const { userId } = res.locals
  const account = await cashService.findAccountByUserId(userId)
  res.status(200).send(account)
}

async function cashOut(req: Request, res: Response) {
  const { userId } = res.locals
  const { username: receiver, amount }: { username: string; amount: number } = req.body

  const users = await cashService.validateUsers(userId, receiver, amount)
  const data = {
    value: amount,
    creditedAccountId: users.giverAccount.account.id,
    debitedAccountId: users.receiverAccount.account.id,
  }
  await cashService.createTransaction(data)

  res.sendStatus(201)
}

const cashController = {
  getAccount,
  cashOut,
}

export default cashController
