import { Box } from '@mui/material';
import React from 'react';
import { greyColor } from 'assets/constants';

interface FullScreenContainerType {
  children: React.ReactNode;
}

function AdsContainer(params: FullScreenContainerType) {
  const { children } = params;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: greyColor,
        width:'100vw',
        height:'100vh'
      }}
    >
      {children}
    </Box>
  );
}

export default AdsContainer;
