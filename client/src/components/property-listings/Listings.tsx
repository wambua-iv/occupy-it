import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { CustomContainer } from '../../styles';

interface ListingType {
  id: number;
  image: any;
  title: string;
  description: string;
  location: string;
}

function Listings() {
  const listings = [
    {
      id: 1,
      image: '/home2.jpg',
      title: 'Executive Apartments',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
    },
    {
      id: 1,
      image: '/home2.jpg',
      title: 'Executive Apartments',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
    },
    {
      id: 1,
      image: '/home2.jpg',
      title: 'Executive Apartments',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
    },
    {
      id: 1,
      image: '/home2.jpg',
      title: 'Executive Apartments',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
    },
  ];
  return (
    <CustomContainer>
      <Box sx={{p: 2, backgroundColor: '#e5e5e5', borderRadius: '.5rem' }}>
        <Typography variant="h5">Listed Properties</Typography>
        <Box sx={{my: 2}}>
          <Grid container spacing={2}>
            {listings.map((listing) => (
              <Grid item key={listing.id}  xs={12} md={3}>
                <LIstingCards {...listing} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </CustomContainer>
  );
}

function LIstingCards({image, title, description, location}: ListingType) {
  return <Paper sx={{
      p: 1,
  }}>
      <Box
        component='img'
        src= {image} 
        alt={title}
        sx={{
            margin: 'auto',
            width: '98%',
            height: '13rem',
            borderRadius: '1rem',
        }}
        />
        <Typography sx={{ fontWeight: 600}}>{title}</Typography>
        <Typography sx={{color: '#0008'}}>{description}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2,}}>
          <Typography variant="subtitle2">Location</Typography>
          <Typography>{location}</Typography>
        </Box>
  </Paper>;
}

export default Listings;
