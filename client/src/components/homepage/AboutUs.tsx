import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { CustomButton } from '../../styles'
import {
  ArrowRight,
  PaymentOutlined,
  PaymentRounded,
  PaymentsOutlined,
} from '@mui/icons-material';

interface Service {
  id: number;
  service: string;
  title: string;
  img: any;
}

function AboutUs() {
  const services = [
    {
      service: 'House and Apartment adverstising',
      id: 0,
      title: 'Getting yourself up and running',
      img: <PaymentOutlined />,
    },
    {
      service: 'House and Apartment adverstising',
      id: 0,
      title: 'Getting yourself up and running',
      img: <PaymentOutlined />,
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        my: 6,
      }}
    >
      <Box
        sx={{
          width: '40%',
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: '#5D33D2' }}
        >
          About Us
        </Typography>
        <Typography variant="h5" sx={{ my: 2 }}>
          We help our clients find homes by providing simplicity
        </Typography>
        <Typography sx={{ my: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda eaque ut. Veritatis animi sequi optio tempora similique,
          dolorem hic id tempore minima ut beatae? Possimus facere quae
          perferendis adipisci?
        </Typography>
        <CustomButton
          sx={{
            borderRadius: '0 3rem 3rem  3rem',
            backgroundColor: '#4f4772',
            color: '#fff',
            px: 6,
          }}
        >
          Explore to find a home <ArrowRight />
        </CustomButton>
      </Box>
      <Box
        sx={{
          width: '55%',
        }}
      >
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid item key={service.id} xs={12} md={6}>
              <ServiceCards {...service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

function ServiceCards({ service, title, img }: Service) {
  return (
    <Paper
      sx={{
        p: 2,
        background: 'linear-gradient(-45deg, #6b92fe 30%, #295b72 90%)',
        height: { xs: '169px', sm: '200px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {img}
      <Typography>{title}</Typography>
      <Typography>{service}</Typography>
    </Paper>
  );
}

export default AboutUs;
