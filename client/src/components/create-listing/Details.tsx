import {
  Box,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

function Details() {
  return (
    <Box sx={{ m: 4, width: '90%', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.8rem' }, mb: 2 }}>Property Details</Typography>
      <InputLabel sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.4rem' } }}>Property Name</InputLabel>
      <Input sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.4rem' }, my: 1 }} placeholder="Executive Apartments" />

      <FormLabel sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.4rem' }, my: 1 }}>Property Type</FormLabel>
      <Box sx={{ mb: 2 }}>
        <RadioGroup row defaultValue="Rental" name="radio-buttons-group">
          <FormControlLabel value="Rental" control={<Radio />} label="Rental" />
          <FormControlLabel value="Bed and BreakFast" control={<Radio />} label="Bed and Breakfast" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </Box>
      <TextField multiline rows={5} fullWidth label="Property Description" />
      <TextField sx={{ my: 2 }} label="Price" />
    </Box>
  );
}
export default Details;
