import cashRepository from "../repositories/cashRepository.js"

async function findAccountByUserId(id: number) {
  const account = await cashRepository.findAccountByUserId(id)
  return account
}

const cashService = {
  findAccountByUserId,
}

export default cashService
