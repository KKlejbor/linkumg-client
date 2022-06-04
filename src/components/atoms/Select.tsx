import React from 'react';
import { InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectTypes {
  id: string;
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
}

function SelectAtom(params: SelectTypes) {
  const { id, label, value, onChange, options } = params;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex' }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select labelId={id} id={id} label={label} value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectAtom;
