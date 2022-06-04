import React, { useState } from 'react';
import FormsContainer from 'components/atoms/FormsContainer';
import FullScreenContainer from 'components/atoms/FullScreenContainer';
import TextInput from 'components/atoms/TextInput';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordInput from 'components/atoms/PasswordInput';
import { SelectChangeEvent } from '@mui/material/Select';
import SelectAtom from 'components/atoms/Select';
import { Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { LinkStyled } from 'components/atoms/LinkStyled';
import { ColorButton } from 'components/atoms/ColorButton';

function Register() {
  const [kind, setKind] = useState<string>('student');
  const [collegeSector, setCollegeSector] = useState<string>('electric');

  const handleKindAccount = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setKind(value);
  };

  const handleCollegeSector = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setCollegeSector(value);
  };

  const optionsUser = [
    { value: 'student', label: 'Student' },
    { value: 'employer', label: 'Firma' },
  ];

  const optionsCollegeSector = [
    { value: 'electric', label: 'Elektryczny' },
    { value: 'mechanic', label: 'Mechaniczny' },
    { value: 'navigation', label: 'Nawigacyjny' },
    { value: 'management', label: 'Zarządzania i Nauk o Jakości' },
  ];

  return (
    <FullScreenContainer>
      <FormsContainer>
        <Typography variant="h6">Zarejestruj się do LinkUMG</Typography>
        <TextInput id="name" label="Imię" Icon={PersonIcon} />
        <TextInput id="lastname" label="Nazwisko" Icon={PersonIcon} />
        <TextInput id="email" label="Email" Icon={EmailIcon} />
        <PasswordInput />
        <SelectAtom
          id="role"
          label="Rodzaj użytkownika"
          value={kind}
          onChange={handleKindAccount}
          options={optionsUser}
        />
        {kind === 'student' ? (
          <>
            <TextInput id="index" label="Numer indeksu" Icon={PersonIcon} />
            <SelectAtom
              id="college-sector"
              label="Wydział"
              value={collegeSector}
              onChange={handleCollegeSector}
              options={optionsCollegeSector}
            />
          </>
        ) : (
          <>
            <TextInput id="company-name" label="Nazwa firmy" Icon={ApartmentIcon} />
            <TextInput id="NIP" label="Numer NIP" Icon={ApartmentIcon} />
          </>
        )}
        <LinkStyled to="/login">Masz konto? Zaloguj się</LinkStyled>
        <ColorButton variant="contained">Zarejestruj się</ColorButton>
      </FormsContainer>
    </FullScreenContainer>
  );
}

export default Register;
