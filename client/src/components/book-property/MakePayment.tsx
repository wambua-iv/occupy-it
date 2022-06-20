import { AccountCircleOutlined, CreditCardOutlined, LockOutlined } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import {
  Box,
  Container,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react';

function MakePayment() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [paymentMode, setPaymentMode] = useState({ value: 'none' });
  return (
    <Box sx={{ m: 4, width: '90%', display: 'flex', flexDirection: 'column' }}>
      <InputLabel></InputLabel>
      <Input placeholder="Names" sx={{ mb: 2 }} />
      <Input placeholder="Email" />

      <FormLabel sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.4rem' }, mt: 2 }}>Payment Mode</FormLabel>
      <Box sx={{ mb: 2 }}>
        <RadioGroup row defaultValue={paymentMode.value} name="radio-buttons-group">
          <FormControlLabel
            value="Visa"
            control={<Radio />}
            label="Visa"
            onClick={() => setPaymentMode({ value: 'visa' })}
          />
          <FormControlLabel
            value="Mpesa"
            control={<Radio />}
            label="Mpesa"
            onClick={() => setPaymentMode({ value: 'Mpesa' })}
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </Box>

      {paymentMode.value == 'visa' ? <VisaCard date={date} setDate={setDate} /> : <Typography>Mpesa</Typography>}
    </Box>
  );
}

function VisaCard({ date, setDate }: any) {
  return (
    <Paper
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(-45deg, #0005 30%, #9991 90%)',
        height: { xs: '169px', sm: '250px' },
      }}
      elevation={2}
    >
      <Typography>Payment Details</Typography>
      <Input
        startAdornment={
          <InputAdornment position="start">
            <AccountCircleOutlined />
          </InputAdornment>
        }
        placeholder="Card Holder Name"
        sx={{ mb: 2, width: '80%' }}
      />
      <Input
        startAdornment={
          <InputAdornment position="start">
            <CreditCardOutlined />
          </InputAdornment>
        }
        placeholder="Credit Card Number"
        sx={{ mb: 4, width: '80%', }}
      />
      <Box sx={{ mb: 4, width: '80%', display: 'flex', justifyContent: 'space-between'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year', 'month']}
            label="Card Expiry"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField sx={{ width: '60%' }}{...params} helperText={null} />}
          />
        </LocalizationProvider>
        <Input
        startAdornment={
          <InputAdornment position="start">
            <LockOutlined />
          </InputAdornment>
        }
        placeholder="CVV"
        sx={{ mb: 4, width: '30%', display: 'flex' }}
      />
      </Box>
    </Paper>
  );
}

function MpesaCard() {
  return <Container></Container>;
}
export default MakePayment;
