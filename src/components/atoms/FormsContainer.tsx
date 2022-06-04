import { Box } from '@mui/material';
import React from 'react';
import { whiteColor } from 'assets/constants';

interface FullScreenContainerType {
  children: React.ReactNode;
}

function FormsContainer(params: FullScreenContainerType) {
  const { children } = params;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        border: '2px solid black',
        borderRadius: '20px',
        padding: '40px 60px',
        backgroundColor: whiteColor,
      }}
    >
      {children}
    </Box>
  );
}

export default FormsContainer;
