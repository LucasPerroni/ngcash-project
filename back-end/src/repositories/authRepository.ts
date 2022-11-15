import { Users } from "@prisma/client"

import { prisma } from "../config/database.js"

async function createUser(data: Users) {
  await prisma.$transaction(async (tx) => {
    const account = await tx.accounts.create({ data: {} })
    await tx.users.create({ data: { ...data, accountId: account.id } })
  })
}

const authRepository = {
  createUser,
}

export default authRepository
