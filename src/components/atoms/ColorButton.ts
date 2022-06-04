import { darkBlueColor, whiteColor } from 'assets/constants';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

export const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: whiteColor,
  backgroundColor: darkBlueColor,
}));
