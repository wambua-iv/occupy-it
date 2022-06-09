import { Box, Typography } from '@mui/material';
import React from 'react';

function Success() {
  return (
    <Box sx={{ backgroundColor: '#784af4', justifyContent: 'space-between', width: '35%' }}>
      <Typography>Get in touch</Typography>
      <Typography>We would love to hear from you, our support team is always there to chat</Typography>
    </Box>
  );
}
export default Success;
