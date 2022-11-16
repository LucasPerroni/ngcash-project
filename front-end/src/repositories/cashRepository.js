import api from "./api"

const config = (token) => {
  return { headers: { authorization: `Bearer ${token}` } }
}

function getAccount(token) {
  const promise = api.get("/cash", config(token))
  return promise
}

function createTransaction(data, token) {
  const promise = api.post("/cash/transaction", data, config(token))
  return promise
}

function getTransactions(token) {
  const promise = api.get("/cash/transaction", config(token))
  return promise
}

const cashRepository = {
  getAccount,
  createTransaction,
  getTransactions,
}

export default cashRepository
