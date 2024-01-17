import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const drawerWidth = 240;

const navItems = [
  { id: 0, text: "Home", link: "/" },
  { id: 1, text: "About", link: "/about" },
  { id: 2, text: "Pricing", link: "/pricing" },
  { id: 3, text: "Contact Us", link: "/contact" },
  { id: 4, text: "Login", link: "/login" },
  {
    component: (
      <Button
        id={5}
        key="outlined"
        variant="outlined"
        sx={{ borderRadius: "50px", px: 2, textTransform: "inherit" }}
      >
        Start Free Trial
      </Button>
    ),
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {item.link ? (
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <ListItemText primary={item.text} />
                </Link>
              ) : (
                item.component
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "secondary.normal" }}>
      <CssBaseline />
      <AppBar component="nav" sx={styles.navContainer}>
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, mt: { xs: 2 } }}>
              <Link to="/">
               <Box
                src="/assets/Logo.png"
                component={"img"}
                sx={{
                  display: { sm: "block" },
                }}
              />
              </Link>
             
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, color: "primary.main" }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{ color: "primary.dark", textTransform: "inherit" }}
                >
                  {item.link ? (
                    <Link to={item.link} style={{ textDecoration: "none" }}>
                      {item.text}
                    </Link>
                  ) : (
                    item.component
                  )}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

const styles = {
  navContainer: {
    bgcolor: "secondary.normal",
    boxShadow: "none",
    // px: { xs: 2, md: 10 },
    // py: { xs: 2, md: 2.5 },
  },
};
