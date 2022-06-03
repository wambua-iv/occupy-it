import { Box, Container } from '@mui/material';
import React from 'react';

function Login() {
  return (<Container maxWidth='lg'>
      <Box 
        component='img'
        alt= ''
        src='/home2.jpg'
        sx={{
            height: { xs: 233, sm: 350, md: 550 },
              width: { xs: 350, sm: 600, md: '40%' },
              borderRadius: '3rem 0 0 3rem'
        }}
      />
      <Box></Box>
  </Container>);
}
export default Login;
