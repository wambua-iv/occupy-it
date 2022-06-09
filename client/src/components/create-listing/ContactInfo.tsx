import { Box, Typography, InputLabel, TextField, Container } from '@mui/material';
import React from 'react';

function ContactInfo() {
  return (
    <Box sx={{ my: 4, px: 1, width: '90%', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.8rem' }, mb: 2 }}>Contact Information</Typography>
      <Box sx={{ mb: 2 }}>
        <InputLabel sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.4rem' } }}>Name</InputLabel>
        <TextField sx={{ my: 2 }} fullWidth label="Your Name" />
      </Box>
      <Box sx={{ mb: 2 }}>
        <InputLabel sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.4rem' } }}>Email</InputLabel>
        <TextField sx={{ my: 2 }} fullWidth label="you@exapmle.com" />
      </Box>
      <Box sx={{ mb: 2 }}>
        <InputLabel sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.4rem' } }}>Phone Number</InputLabel>
        <TextField sx={{ my: 2 }} fullWidth label="Phone Number" />
      </Box>
      <TextField multiline rows={5} fullWidth label="Property Description" />
    </Box>
  );
}

export default ContactInfo;
