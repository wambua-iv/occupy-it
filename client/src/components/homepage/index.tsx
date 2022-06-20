import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../styles';
import { SearchBar } from '../utils';
import AboutUs from './AboutUs';
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';

function HomePage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        overflow: 'hidden',
      }}
    >
      <Hero />
      <SearchBar />
      <WhatWeDo />
      <AboutUs />
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component="img"
          src="/svg/Saly-10.svg"
          sx={{
            width: '400px',
            height: '400px',
            backgroundColor: '#e5e5e5',
          }}
        />
        <Box sx={{ width: '50%' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#443D5E', position: 'relative', top: '40%' }}>
            Give your House Hunt a boost.
          </Typography>
          <CustomButton
            sx={{
              borderRadius: '0 3rem 3rem  3rem',
              backgroundColor: '#433c5d',
              color: '#fff',
              px: 6,
              position: 'relative',
              top: '40%',
            }}
          >
            Find a Home today
          </CustomButton>
        </Box>
      </Container>
    </Container>
  );
}

export default HomePage;
