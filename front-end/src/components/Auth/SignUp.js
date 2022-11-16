import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Main, Logo, Auth } from "./styles"

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
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

          {inputs.map((i) => {
            return (
              <input
                placeholder={i.ph}
                type={i.type}
                minLength={i.ph === "password" ? 8 : 3}
                disabled={loading ? true : false}
                className={loading ? true : false}
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
