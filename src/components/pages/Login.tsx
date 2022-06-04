import * as React from 'react';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TextInput from 'components/atoms/TextInput';
import PasswordInput from 'components/atoms/PasswordInput';
import FullScreenContainer from 'components/atoms/FullScreenContainer';
import FormsContainer from 'components/atoms/FormsContainer';
import { ColorButton } from 'components/atoms/ColorButton';
import { LinkStyled } from 'components/atoms/LinkStyled';

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
