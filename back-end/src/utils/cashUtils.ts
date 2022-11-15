function formatTransactions(transactions: any) {
  transactions.TransactionsCredit.forEach((t) => {
    t.credited = t.credited.Users[0].username
    t.debited = t.debited.Users[0].username
  })

  transactions.TransactionsDebit.forEach((t) => {
    t.credited = t.credited.Users[0].username
    t.debited = t.debited.Users[0].username
  })

  const allTransactions = [...transactions.TransactionsDebit, ...transactions.TransactionsCredit].sort(
    (a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  )

  const transactionsSorted = {
    transactions: allTransactions,
    debited: transactions.TransactionsDebit,
    credited: transactions.TransactionsCredit,
  }

  return transactionsSorted
}

const cashUtils = {
  formatTransactions,
}

export default cashUtils
