import { Link } from 'react-router-dom';
import { darkBlueColor } from 'assets/constants';
import { styled } from '@mui/material/styles';

export const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: darkBlueColor,
}));
