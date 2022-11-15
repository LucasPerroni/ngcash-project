import { Transactions } from "@prisma/client"

import { prisma } from "../config/database.js"

async function findAccountByUserId(id: number) {
  const account = await prisma.users.findUnique({
    where: { id },
    select: { id: true, username: true, account: true },
  })
  return account
}

async function createTransaction(data: Omit<Transactions, "id" | "createdAt">) {
  await prisma.$transaction(async (tx) => {
    await tx.accounts.update({
      data: { balance: { decrement: data.value } },
      where: { id: data.creditedAccountId },
    })
    await tx.accounts.update({
      data: { balance: { increment: data.value } },
      where: { id: data.debitedAccountId },
    })
    await tx.transactions.create({ data })
  })
}

async function getTransactionsByAccountId(id: number) {
  const transactions = await prisma.accounts.findUnique({
    where: { id },
    select: {
      TransactionsCredit: {
        select: {
          id: true,
          value: true,
          creditedAccountId: true,
          debitedAccountId: true,
          credited: { select: { Users: { select: { username: true } } } },
          debited: { select: { Users: { select: { username: true } } } },
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      },
      TransactionsDebit: {
        select: {
          id: true,
          value: true,
          creditedAccountId: true,
          debitedAccountId: true,
          credited: { select: { Users: { select: { username: true } } } },
          debited: { select: { Users: { select: { username: true } } } },
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      },
    },
  })

  return transactions
}

const cashRepository = {
  findAccountByUserId,
  createTransaction,
  getTransactionsByAccountId,
}

export default cashRepository
