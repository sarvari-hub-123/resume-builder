import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);


  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const closeMenu = () => {
    setAnchorEl(null);
  };


  return (

    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        backgroundColor:"#ffffff",
        color:"#1e293b",
      }}
    >

      <Toolbar
        sx={{
          maxWidth:"1200px",
          width:"100%",
          margin:"auto",
        }}
      >


        {/* Logo */}

        <Typography
          variant="h5"
          fontWeight="bold"
          component={Link}
          to="/"
          sx={{
            flexGrow:1,
            textDecoration:"none",
            color:"#2563EB",
          }}
        >
          ResumeBuilder
        </Typography>





        {/* Desktop Menu */}

        <Box
          sx={{
            display:{
              xs:"none",
              md:"flex"
            },
            gap:2
          }}
        >


          <Button
            component={Link}
            to="/"
            sx={{
              color:"#1e293b",
              fontWeight:600
            }}
          >
            Home
          </Button>



          <Button
            href="#templates"
            sx={{
              color:"#1e293b",
              fontWeight:600
            }}
          >
            Templates
          </Button>



          <Button
            component={Link}
            to="/about"
            sx={{
              color:"#1e293b",
              fontWeight:600
            }}
          >
            About
          </Button>



          <Button
            component={Link}
            to="/details"
            variant="contained"
            sx={{
              borderRadius:3,
              px:3,
              textTransform:"none",
              fontWeight:"bold"
            }}
          >
            Create Resume
          </Button>


        </Box>





        {/* Mobile Menu */}

        <IconButton
          sx={{
            display:{
              xs:"flex",
              md:"none"
            }
          }}
          onClick={openMenu}
        >

          <MenuIcon />

        </IconButton>



        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >

          <MenuItem
            component={Link}
            to="/"
            onClick={closeMenu}
          >
            Home
          </MenuItem>


          <MenuItem
            component={Link}
            to="/details"
            onClick={closeMenu}
          >
            Create Resume
          </MenuItem>


          <MenuItem
            component={Link}
            to="/about"
            onClick={closeMenu}
          >
            About
          </MenuItem>


        </Menu>


      </Toolbar>

    </AppBar>

  );
}


export default Navbar;