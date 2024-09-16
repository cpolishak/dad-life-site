import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Stories", "Resources"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ToolBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const mainPageStyle = {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontSize: "24px",
    fontWeight: 700,
    letterSpacing: ".2rem",
    color: "black",
    textDecoration: "none",
  };

  const mainLinkStyle = {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  }

  const largeNavStyle = {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
  };

  const navLinksStyling = {
    my: 2,
    color: "black",
    fontSize: "18px",
    px: 3,
    display: "block",
  };

  const loginBtnStyle = {
    my: 2,
    color: "black",
    fontSize: "18px",
    px: 3,
    display: "block",
  };

  const aTagStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={mainPageStyle}
          >
            Girl Dad Life
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                // color: 'black',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={aTagStyle}>
                    <Link to={`/${page.toLowerCase()}`} style={aTagStyle}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem key="login" onClick={handleCloseNavMenu}>
                Login
              </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={mainLinkStyle}
          >
            Girl Dad Life
          </Typography>
          <Box
            sx={largeNavStyle}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                to={`/${page.toLowerCase()}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={navLinksStyling}
              >
                <Link to={`/${page.toLowerCase()}`} style={aTagStyle}>
                  {page}
                </Link>
              </Button>
            ))}
            <Button
              sx={loginBtnStyle}
            >
              Login
            </Button>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px',  color: 'black' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color='black'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ToolBar;
