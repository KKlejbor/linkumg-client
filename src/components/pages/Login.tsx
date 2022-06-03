import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import { darkBlueColor, whiteColor } from 'assets/constants';
import { Link } from 'react-router-dom';
import TextInput from 'components/atoms/TextInput';
import PasswordInput from 'components/atoms/PasswordInput';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: whiteColor,
  backgroundColor: darkBlueColor,
}));

const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: darkBlueColor,
}));

function Login() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          border: '2px solid black',
          borderRadius: '20px',
          padding: '40px',
          backgroundColor: whiteColor,
        }}
      >
        <Typography variant="h6">Zaloguj się do LinkUMG</Typography>
        <TextInput id="email" label="Email" Icon={EmailIcon} />
        <PasswordInput />
        <ColorButton variant="contained">Zaloguj się</ColorButton>
        <LinkStyled to="/register">Zarejestruj się na LinkUMG</LinkStyled>
      </Box>
    </Box>
  );
}

export default Login;
