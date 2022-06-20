import { Box, styled, Typography } from '@mui/material';
import React from 'react';

function ConfirmBooking() {

  const SpacedTypograph =styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
  })
  const WeightedTypography = styled(Typography)({
    fontWeight: 600,
    margin: '.25rem 0',
  })
  return (
    <Box >
        <Typography>Confirm Booking Details</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2, }}>
        <Box
          component="img"
          src="/home.jpg"
          alt="home"
          sx={{ width: '14rem', height: '13rem', borderRadius: '1rem' }}
        />
        <Box sx={{ width: '55%' }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.5rem', md: '1.6rem' },
              mb: 2,
            }}
          >
            Executive ApartMent
          </Typography>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam illum temporibus quo quis laborum, repellat nesciunt numquam recusandae error? Necessitatibus impedit, non facilis aliquam vitae totam? Quo libero distinctio nesciunt.</Typography>
        </Box>
      </Box>
      <hr />
      <Box>
        <SpacedTypograph>
          <WeightedTypography>Apartment Name: </WeightedTypography>
          <Typography>Executive Home</Typography>
        </SpacedTypograph>
        <SpacedTypograph>
          <WeightedTypography>Rental Price</WeightedTypography>
          <Typography>ksh 25000</Typography>
        </SpacedTypograph>
        <SpacedTypograph>
          <WeightedTypography>Description</WeightedTypography>
        </SpacedTypograph>
      </Box>
    </Box>
  );
}
export default ConfirmBooking;
