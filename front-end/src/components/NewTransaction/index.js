import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Wrapper } from "./style"
import Navigation from "../Home/Navigation"
import cashRepository from "../../repositories/cashRepository"
import UserContext from "../../contexts/UserContext"

export default function NewTransaction() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const [account, setAccount] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    cashRepository
      .getAccount(user.token)
      .then(({ data }) => {
        setAccount(data.account)
      })
      .catch(({ response }) => {
        console.log(response)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const data = {
      username: e.target[0].value,
      amount: Number(e.target[1].value),
    }

    cashRepository
      .createTransaction(data, user.token)
      .then((response) => {
        navigate("/home")
      })
      .catch(({ response }) => {
        alert(`${response.data}`)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const inputs = [
    { ph: "Username", type: "text" },
    { ph: "Value", type: "number" },
  ]

  return (
    <>
      <Navigation />

      <Wrapper>
        {account.id ? (
          <>
            <h1>New Transaction</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
              {inputs.map((i, index) => {
                return (
                  <input
                    key={index}
                    placeholder={i.ph}
                    type={i.type}
                    disabled={loading ? true : false}
                    className={loading ? "loading" : ""}
                    min="0"
                    max={account.balance}
                    step="1"
                    required
                  />
                )
              })}
              <button type="confirm" disabled={loading ? true : false} className={loading ? "loading" : ""}>
                Confirm
              </button>
            </form>

            {error ? <h1 className="error">Failed to submit transaction</h1> : <></>}
          </>
        ) : (
          <h2 style={{ fontSize: "20px" }}>Loading...</h2>
        )}
      </Wrapper>
    </>
  )
}
