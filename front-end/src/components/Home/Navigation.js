import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { IconButton, Tooltip } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import Logout from "@mui/icons-material/Logout"

import stringAvatar from "../../utils/avatarColor"

export default function Navigation({ user }) {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  function logout() {
    localStorage.clear()
    navigate("/")
  }

  return (
    <Header>
      <h1 onClick={() => navigate("/home")}>NG CASH</h1>

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} {...stringAvatar(user.user.username)} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  background-color: var(--site-theme);
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;

    cursor: pointer;
  }
`
