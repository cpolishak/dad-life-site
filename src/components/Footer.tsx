import * as React from "react";
import { Box, Grid, Icon, Menu, MenuItem, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Main from "../Main";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const aTagStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Box sx={{ backgroundColor: "rgba(236, 228, 228, 0.95)" }}>
      <Grid container p={4}>
        <Grid
          item
          xs={12}
          sm={2}
          py={2}
          sx={{ textAlign: "center", alignContent: "center" }}
        >
          <Typography variant="h4">
            <a href="/" style={aTagStyle}>
              Girl Dad Life
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} py={2} sx={{ textAlign: "center" }}>
          <Typography variant="h6" py={4}>
            Where you can find us
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={3}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={aTagStyle}
              >
                <LinkedInIcon sx={{ fontSize: 80 }} />
              </a>
            </Grid>
            <Grid item xs={12} sm={3}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={aTagStyle}
              >
                <InstagramIcon sx={{ fontSize: 80 }} />
              </a>
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          py={2}
          sx={{ textAlign: "center", alignContent: "center" }}
        >
          <Typography variant="h6">SiteMap</Typography>
          <Typography variant="subtitle1">
            <Link to="/stories" style={aTagStyle}>
              Stories
            </Link>
          </Typography>
          <Typography variant="subtitle1">
          <Link to="/resources" style={aTagStyle}>
              Resources
            </Link>
          </Typography>
          <Typography variant="subtitle1">
          <Link to="/archives" style={aTagStyle}>
              Archives
            </Link>
          </Typography>
        </Grid>{" "}
      </Grid>
    </Box>
  );
};
