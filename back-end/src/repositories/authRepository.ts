import { Users } from "@prisma/client"

import { prisma } from "../config/database.js"

async function createUser(data: Users) {
  await prisma.$transaction(async (tx) => {
    const account = await tx.accounts.create({ data: {} })
    await tx.users.create({ data: { ...data, accountId: account.id } })
  })
}

async function findUserByUserName(username: string) {
  const user = await prisma.users.findUnique({
    where: { username },
    select: { id: true, username: true, password: true, account: { select: { id: true } } },
  })
  return user
}

const authRepository = {
  createUser,
  findUserByUserName,
}

export default authRepository
