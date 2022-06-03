import React from 'react';
import { Box, CardMedia, Container, Typography } from '@mui/material';
import { CustomButton } from '../utils';



function Hero() {
  return (
    <Container maxWidth="lg" sx={{
      backgroundImage: 'url(/backdrop.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#e5e5e5',
      margin: 'auto',
      width: '96vw',
      height: '78vh',
      position: 'relative',
      zIndex: 1,
      borderRadius: '1rem',
      overflow: 'hidden'
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 10,
          borderRadius: '3rem',
        }}
      >
        <Box
          sx={{
            width: '40%',
            height: '70%',
            display: 'flex',
            flexDirection: 'column',
            my: 20,
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '3.8rem' },
              color: '#4f4772',
            }}
          >
            Optimize finding your Home with  
            <span style={{ color: '#5D33D2', fontWeight: 700 }}> Occupy It</span>
          </Typography>
          <Box
            sx={{
              width: '100%',
              margin: 'auto',
              ml: 5,
              my: 8,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CustomButton
              sx={{
                borderRadius: '0 3rem 3rem  3rem',
                backgroundColor: '#4f4772',
                color: '#fff',
                px: 6,
              }}
            >
              Find A Home
            </CustomButton>
            <CustomButton
              sx={{
                borderRadius: '3rem  0 3rem  3rem',
                backgroundColor: '#433c5d',
                color: '#fff',
                px: 6,
              }}
            >
              Are you a LandLord
            </CustomButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: '55%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            component="img"
            src="/home.jpg"
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200%',
              padding: '0.5rem',
              backgroundColor: '#e5e5e5',
              width: '13rem',
              height: '13rem',
              position: 'absolute',
              zIndex: 2,
              top: '20%',
              right: '10%',
              borderRadius: '50%',
              transform: 'translate(-30%, -30%)',
            }}
          />
          <Box
            component="img"
            sx={{
              height: { xs: 233, md: 450 },
              width: { xs: 350, md: 800 },
            }}
            alt="The house from the offer."
            src="/svg/RectangleOne.svg"
          />
          <Box
            component="img"
            sx={{
              height: { xs: 233, sm: 350, md: 550 },
              width: { xs: 350, sm: 600, md: 950 },
              position: 'relative',
              top: '-35%',
            }}
            alt="The house from the offer."
            src="/svg/RectangleTwo.svg"
          />
          <Box
            component="img"
            src="/home2.jpg"
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200%',
              padding: '0.5rem',
              backgroundColor: '#e9e9e9',
              width: '13rem',
              height: '13rem',
              position: 'absolute',
              zIndex: 2,
              top: '38%',
              right: '1%',
              borderRadius: '50%',
              transform: 'translate(-30%, -10%)',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
export default Hero;
