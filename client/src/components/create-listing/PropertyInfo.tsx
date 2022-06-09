import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  Box,
  Typography,
  InputLabel,
  TextField,
} from '@mui/material';
import React from 'react';


function PropertyInfo() {
  const [value, setValue] = React.useState<Date | null>(null);
  return (
    <Box sx={{ m: 4, width: '90%', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.8rem' } }}>Property Infomation</Typography>
      <Box>
      <InputLabel sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.4rem' } }}>Availability</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
          label="Responsive"
          minDate={new Date('2017-01-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      </Box>
      <TextField sx={{ my: 2 }} select label="Rooms" />
      <TextField multiline rows={5} fullWidth label="Ameties available" />
      <Typography></Typography>
      <Box sx={{ display: 'flex', my: 2, justifyContent: 'space-between' }}>
        <TextField sx={{ width: '60%' }} select label="Town" />
        <TextField label="House Number" />
      </Box>
    </Box>
  );
}
export default PropertyInfo;
