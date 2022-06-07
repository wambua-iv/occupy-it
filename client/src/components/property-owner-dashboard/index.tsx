import styled from '@emotion/styled';
import { Add, Search } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { CustomButton, CustomInput } from '../../styles';import Rentals from './Rentals';
;

function PropertyOwner() {

  const HambegerSpans = styled.span`
    height: 2px;
    width:  40px;
    background-color: #0008;
    margin: .25rem;
  `;
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            my: 2,
            px: 3,
            display: 'flex',
            width: '60%',
            height: '3rem',
            backgroundColor: '#fff',
            borderRadius: '1rem',
            alignItems: 'center',
          }}
        >
          <Search />
          <CustomInput sx={{ border: 'none', position: 'relative', bottom: '5%' }} placeholder='search'/>
        </Box>
        <CustomButton
          sx={{
            borderRadius: '3rem  0 3rem  3rem',
            backgroundColor: '#99a',
          }}
        >
          <Add /> Add Property
        </CustomButton>

        <Box sx={{
            my: 2,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
        }}>
          <HambegerSpans />
          <HambegerSpans />
          <HambegerSpans />
        </Box>
      </Box>
      <Rentals />
    </Container>
  );
}
export default PropertyOwner;
