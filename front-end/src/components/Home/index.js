import { useContext, useEffect, useState } from "react"

import UserContext from "../../contexts/UserContext"
import Navigation from "./Navigation"
import Transactions from "./Transactions"
import Buttons from "./Buttons"
import styled from "styled-components"

import cashRepository from "../../repositories/cashRepository"

export default function Home() {
  const { user } = useContext(UserContext)

  const [account, setAccount] = useState({})
  const [transactions, setTransactions] = useState({})

  useEffect(() => {
    cashRepository
      .getAccount(user.token)
      .then(({ data }) => {
        setAccount(data)
      })
      .catch(({ response }) => {
        console.log(response)
      })

    cashRepository
      .getTransactions(user.token)
      .then(({ data }) => {
        setTransactions(data)
      })
      .catch(({ response }) => {
        console.log(response)
      })
  }, [])

  return (
    <>
      <Navigation user={user} />

      <Wrapper>
        {transactions.transactions ? (
          <>
            <Transactions user={account} allTransactions={transactions} />
            <Buttons />
          </>
        ) : (
          <h1 style={{ fontSize: "30px" }}>Loading...</h1>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  margin-top: 56px;

  display: flex;
  justify-content: space-between;

  height: calc(100% - 56px);
  width: 100%;
  padding: 30px;
`
