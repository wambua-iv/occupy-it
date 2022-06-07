import { Verified } from '@mui/icons-material';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { CustomButton, CustomContainer } from '../../styles';

interface RentalType {
  id: number;
  image: any;
  property: string;
  houseNumber: string;
  rent: number;
  occupied: boolean;
  tenant: {
    names: string;
    img: any;
  };
}

function Rentals() {
  const rentals = [
    {
      id: 1,
      image: '/home.jpg',
      property: 'Executive Residence',
      houseNumber: 'ER 205',
      rent: 25000,
      occupied: true,
      tenant: {
        names: 'Messy Wambua',
        img: '/string',
      },
    },
    {
      id: 2,
      image: '/home.jpg',
      property: 'Executive Residence',
      houseNumber: 'ER 205',
      rent: 25000,
      occupied: true,
      tenant: {
        names: 'Messy Wambua',
        img: '/string',
      },
    },
    {
      id: 3,
      image: '/home.jpg',
      property: 'Executive Residence',
      houseNumber: 'ER 205',
      rent: 25000,
      occupied: true,
      tenant: {
        names: 'Messy Wambua',
        img: '/string',
      },
    },
    {
      id: 4,
      image: '/home.jpg',
      property: 'Executive Residence',
      houseNumber: 'ER 205',
      rent: 25000,
      occupied: true,
      tenant: {
        names: 'Messy Wambua',
        img: '/string',
      },
    },
  ];
  return (
    <CustomContainer>
      <Box sx={{ p: 2, backgroundColor: '#e5e5e5', borderRadius: '.5rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ width: '60%' }}>
            Rental Properties
          </Typography>
          <CustomButton
            sx={{
              p: 0.5,
              borderRadius: '0rem  3rem  3rem',
              backgroundColor: '#99a',
            }}
          >
            Occupied Properties
          </CustomButton>
          <CustomButton
            sx={{
              p: 0.5,
              borderRadius: '3rem 0 3rem 3rem',
              backgroundColor: '#99a',
            }}
          >
            Vacant Properties
          </CustomButton>
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={6}>
            {rentals.map((rental) => (
              <Grid item key={rental.id} xs={12} md={6}>
                <RentalCards {...rental} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </CustomContainer>
  );
}

function RentalCards({ tenant, property, houseNumber, rent, occupied, image }: RentalType) {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#fff',
        borderRadius: '.5rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box component="img" src={image} alt="Property image" sx={{ height: '8rem', borderRadius: '.5rem' }} />
      <Box sx={{ width: '55%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle2">{property}</Typography>
          <Typography>{rent}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>{houseNumber}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">{tenant.names}</Typography> <Verified />
        </Box>
      </Box>
    </Box>
  );
}
export default Rentals;
