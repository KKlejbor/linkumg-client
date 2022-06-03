import React from 'react';
import { TextField, InputAdornment, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface TextInputType {
  id: string;
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

function TextInput(params: TextInputType) {
  const { id, label, Icon } = params;

  return (
    <TextField
      id={id}
      label={label}
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TextInput;
