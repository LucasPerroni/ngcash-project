import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import UserContext from "./contexts/UserContext"
import SignUpPage from "./pages/SignUp"
import SignInPage from "./pages/SignIn"
import HomePage from "./pages/Home"
import NewTransactionPage from "./pages/NewTransaction"

export default function App() {
  let savedUser = JSON.parse(localStorage.getItem("ngcash-user"))
  if (!savedUser) {
    savedUser = {}
  }

  const [user, setUser] = useState(savedUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/transaction/new" element={<NewTransactionPage />} />
          <Route path="*" element={<h1>This page doesn't exist...</h1>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
