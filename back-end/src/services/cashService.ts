import { Transactions } from "@prisma/client"

import { Error } from "../middlewares/errorHandler.js"
import authRepository from "../repositories/authRepository.js"
import cashRepository from "../repositories/cashRepository.js"
import cashUtils from "../utils/cashUtils.js"

async function findAccountByUserId(id: number) {
  const account = await cashRepository.findAccountByUserId(id)

  if (!account) {
    Error.errorNotFound("Couldn't find account")
  }

  return account
}

async function validateUsers(giverId: number, receiver: string, amount: number) {
  const giverAccount = await cashRepository.findAccountByUserId(giverId)
  const receiverAccount = await authRepository.findUserByUserName(receiver)

  if (!giverAccount || !receiverAccount) {
    Error.errorNotFound("Couldn't find giver or receiver account")
  } else if (giverAccount.username === receiverAccount.username) {
    Error.errorUnauthorized("Giver and Receiver cannot be the same person")
  } else if (amount > giverAccount.account.balance) {
    Error.errorUnauthorized("Amount to be transferred is greater than giver balance")
  }

  return { giverAccount, receiverAccount }
}

async function createTransaction(data: Omit<Transactions, "id" | "createdAt">) {
  await cashRepository.createTransaction(data)
}

async function getTransactionsByUserId(id: number) {
  const { account } = await cashRepository.findAccountByUserId(id)
  const transactions = await cashRepository.getTransactionsByAccountId(account.id)

  return cashUtils.formatTransactions(transactions)
}

const cashService = {
  findAccountByUserId,
  validateUsers,
  createTransaction,
  getTransactionsByUserId,
}

export default cashService
