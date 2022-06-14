import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoSvg from 'assets/images/Logo.svg';
import { darkBlueColor } from 'assets/constants';
import Link from '@mui/material/Link';

const pages = [''];

function Bar() {
  const [anchorElNav] = React.useState<null | HTMLElement>(null);


  return (
    <AppBar position="static">
      <Container maxWidth={false} sx={{ backgroundColor:darkBlueColor}}>
        <Toolbar disableGutters  sx={{
        backgroundColor:darkBlueColor,
        }}>
          <Link href="/">
          <img src={logoSvg} alt="logo" width="60px" height="62px"/>
          </Link>
          <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none',}, }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
              
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2,pl:5, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize:'15px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jan Kowalski
          </Typography> 
          <Box sx={{ flexGrow: 0 }}>
            <PersonIcon sx={{ p: 0, width:'40px', height:'40px'}}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Bar;
