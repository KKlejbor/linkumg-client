import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import PasswordIcon from '@mui/icons-material/Password';

function PasswordInput() {
  return (
    <TextField
      id="password"
      type="password"
      label="Hasło"
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PasswordIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordInput;
