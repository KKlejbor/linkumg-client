import * as React from 'react';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TextInput from 'components/atoms/TextInput';
import PasswordInput from 'components/atoms/PasswordInput';
import FullScreenContainer from 'components/atoms/FullScreenContainer';
import FormsContainer from 'components/atoms/FormsContainer';
import { ColorButton } from 'components/atoms/ColorButton';
import { LinkStyled } from 'components/atoms/LinkStyled';
import { GlobalStyle } from 'styles/GlobalStyle';
import loginPhoto from 'assets/images/login.png';

function Login() {
  return (
    <>
      <GlobalStyle url={loginPhoto} />
      <FullScreenContainer>
        <FormsContainer>
          <Typography variant="h6">Zaloguj się do LinkUMG</Typography>
          <TextInput id="email" label="Email" Icon={EmailIcon} />
          <PasswordInput />
          <ColorButton variant="contained">Zaloguj się</ColorButton>
          <LinkStyled to="/register">Zarejestruj się na LinkUMG</LinkStyled>
        </FormsContainer>
      </FullScreenContainer>
    </>
  );
}

export default Login;
