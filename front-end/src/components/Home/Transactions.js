import { useState } from "react"
import styled from "styled-components"
import * as muiStyle from "@mui/material/styles"
import Button from "@mui/material/Button"

import formatCash from "../../utils/formatCash"
import formatDate from "../../utils/formatDate"

export default function Transactions({ user, allTransactions }) {
  const [selected, setSelected] = useState("Date")
  const [transactions, setTransactions] = useState(allTransactions.transactions)

  function sortTransactions(name) {
    setSelected(name)

    if (name === "Date") {
      setTransactions(allTransactions.transactions)
    } else if (name === "Debited") {
      setTransactions(allTransactions.debited)
    } else {
      setTransactions(allTransactions.credited)
    }
  }

  return (
    <Main>
      <Menu>
        <div>
          <h1>{user.username}</h1>
          <p>
            <span>Balance:</span> {formatCash(user.account.balance)}
          </p>
        </div>

        <div>
          {["Date", "Debited", "Credited"].map((name) => {
            return (
              <StyledButton
                key={name}
                variant={selected === name ? "contained" : "outlined"}
                className={selected === name ? "filled" : ""}
                onClick={() => sortTransactions(name)}
              >
                {name}
              </StyledButton>
            )
          })}
        </div>
      </Menu>

      <TransactionLog className={transactions[0] ? "" : "no-transactions"}>
        {transactions[0] ? (
          transactions.map((t, i) => {
            return (
              <article key={i} className={t.debited === user.username ? "debited" : "credited"}>
                <div>
                  <h1>
                    {t.credited} to {t.debited}
                  </h1>
                  <time>{formatDate(t.createdAt)}</time>
                </div>
                <p>{formatCash(t.value)}</p>
              </article>
            )
          })
        ) : (
          <h1 className="no-transactions">You don't have any transactions yet</h1>
        )}
      </TransactionLog>
    </Main>
  )
}

const Main = styled.main`
  width: 75%;
  height: 100%;

  * {
    transition: all 0.3s;
  }
`

const Menu = styled.div`
  margin: 0 0 20px 20px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--site-theme-bright);
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    color: #ffffff;

    span {
      color: var(--site-theme-bright);
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
  }
`

const TransactionLog = styled.section`
  background-color: #ffffff;
  width: 100%;
  height: 85%;

  padding: 20px;
  border-radius: 20px;

  overflow-y: auto;

  &.no-transactions {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .no-transactions {
    font-size: 35px;
    font-weight: bold;
    color: #bdbdbd;
    text-align: center;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;
    padding: 10px;
    margin-bottom: 25px;

    * {
      font-size: 20px;
    }

    h1 {
      margin-bottom: 5px;
    }

    time {
      font-size: 15px;
      color: #2f2f2f;
    }

    &.debited {
      box-shadow: 0px 0px 6px 2px rgba(60, 255, 60, 0.4);
    }

    &.credited {
      box-shadow: 0px 0px 6px 2px rgba(255, 103, 103, 0.4);
    }
  }
`

const StyledButton = muiStyle.styled(Button)({
  borderColor: "#128be7",
  color: "#128be7",
  marginRight: "10px",

  "&.filled": {
    backgroundColor: "#128be7",
    color: "#ffffff",
  },
})
