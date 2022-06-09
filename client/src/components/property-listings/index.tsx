import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { CustomContainer } from '../../styles';
import { SearchBar } from '../utils';
import Listings from './Listings';

function PropertyListings() {

  return (
    <Container maxWidth='lg'>
        <Box sx={{ my:6, }}>
            <SearchBar />
        </Box>
        <Listings />
    </Container>
  );
}
export default PropertyListings;