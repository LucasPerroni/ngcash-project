import { prisma } from "../config/database.js"

async function findAccountByUserId(id: number) {
  const account = await prisma.users.findUnique({
    where: { id },
    select: { id: true, username: true, account: true },
  })
  return account
}

const cashRepository = {
  findAccountByUserId,
}

export default cashRepository
