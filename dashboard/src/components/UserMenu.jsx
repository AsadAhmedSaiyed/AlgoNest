import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  Divider,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserMenu() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://algonest.onrender.com/user/${id}`);
        if (res.data.user) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.log("Failed!", err);
      }
    };
    fetchUser();
  }, [id]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    handleCloseUserMenu();
    try {
      await axios.post("https://algonest.onrender.com/logout", null, {
        withCredentials: true,
      });

      localStorage.clear();
      window.location.href = "https://algo-nest.vercel.app/login";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Account">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountCircle sx={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          width: { xs: "80vw", sm: "auto" },
          maxWidth: "100vw",
        }}
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {user && (
          <Box sx={{ px: 2, py: 1 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              noWrap
              sx={{ maxWidth: "100%" }}
            >
              {user.username}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ wordBreak: "break-word", maxWidth: "100%" }}
            >
              {user.email}
            </Typography>
          </Box>
        )}
        <Divider />
        <MenuItem onClick={handleLogout}>
          <Typography color="error" sx={{ textAlign: "center", width: "100%" }}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default UserMenu;
