import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import UserContext from "../../contexts/UserContext"

export default function Home() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  return <></>
}
