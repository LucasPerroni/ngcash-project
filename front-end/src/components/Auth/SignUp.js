import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Main, Logo, Auth } from "./styles"
import authRepository from "../../repositories/authRepository"

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const data = {
      username: e.target[0].value,
      password: e.target[1].value,
    }

    authRepository
      .createUser(data)
      .then((response) => {
        navigate("/sign-in")
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
    { ph: "username", type: "text" },
    { ph: "password", type: "password" },
  ]

  return (
    <Main>
      <Logo>
        <h1>NG CASH</h1>
      </Logo>

      <Auth>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Sign Up</h1>

          {inputs.map((i, index) => {
            return (
              <input
                key={index}
                placeholder={i.ph}
                type={i.type}
                minLength={i.ph === "password" ? 8 : 3}
                disabled={loading ? true : false}
                className={loading ? "loading" : ""}
                pattern={
                  i.type === "password"
                    ? `(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]?)[A-Za-z\\d@$!%*?&]{8,}`
                    : "[a-zA-z]{3,}"
                }
                title={
                  i.type === "password"
                    ? "A senha deve conter 8 dígitos, 1 letra maiúscula, 1 letra minúscula e 1 número"
                    : "O nome de usuário deve ter pelo menos 3 letras e não pode conter números"
                }
                required
              />
            )
          })}

          <button type="confirm" disabled={loading ? true : false} className={loading ? "loading" : ""}>
            Confirm
          </button>

          <p onClick={() => navigate("/sign-in")}>Already have an account? Sign In!</p>
          {error ? <p className="error">Failed to Sign Up</p> : <></>}
        </form>
      </Auth>
    </Main>
  )
}
