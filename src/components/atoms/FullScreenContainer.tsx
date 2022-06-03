import { Box } from '@mui/material';
import React from 'react';

interface FullScreenContainerType {
  children: React.ReactNode;
}

function FullScreenContainer(params: FullScreenContainerType) {
  const { children } = params;
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
}

export default FullScreenContainer;
