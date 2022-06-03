import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import { darkBlueColor, whiteColor } from 'assets/constants';
import { Link } from 'react-router-dom';
import TextInput from 'components/atoms/TextInput';
import PasswordInput from 'components/atoms/PasswordInput';
import FullScreenContainer from 'components/atoms/FullScreenContainer';
import FormsContainer from 'components/atoms/FormsContainer';

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
    <FullScreenContainer>
      <FormsContainer>
        <Typography variant="h6">Zaloguj się do LinkUMG</Typography>
        <TextInput id="email" label="Email" Icon={EmailIcon} />
        <PasswordInput />
        <ColorButton variant="contained">Zaloguj się</ColorButton>
        <LinkStyled to="/register">Zarejestruj się na LinkUMG</LinkStyled>
      </FormsContainer>
    </FullScreenContainer>
  );
}

export default Login;
