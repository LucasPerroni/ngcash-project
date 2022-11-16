import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import * as muiStyle from "@mui/material/styles"
import Button from "@mui/material/Button"

export default function Buttons() {
  const navigate = useNavigate()

  return (
    <Aside>
      <StyledButton variant="contained" onClick={() => navigate("/transaction/new")}>
        New Transaction
      </StyledButton>
    </Aside>
  )
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 20%;
  padding: 11px;
`

const StyledButton = muiStyle.styled(Button)({
  backgroundColor: "#128be7",
  color: "#ffffff",

  height: "60px",
  width: "200px",
  maxWidth: "100%",

  fontSize: "17px",
  fontWeight: "bold",

  marginBottom: "15px",
  overflow: "hidden",
})
