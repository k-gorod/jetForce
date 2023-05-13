import React, { FC } from 'react';

import { Box, CircularProgress } from '@mui/material';

interface ILoader {
  // color
}

const Loader : FC<ILoader> = () => (
  <Box sx={{
    display: 'grid', justifyContent: 'center', alignItems: 'center', width: '100%',
  }}
  >
    <CircularProgress />
  </Box>
);

export default Loader;
