import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUpPage from "./pages/SignUp"
import SignInPage from "./pages/SignIn"
import HomePage from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<h1>This page doesn't exist...</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
