import { LocationOn } from '@mui/icons-material';
import { Box, Container, Input, InputAdornment, MenuItem, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import { Divider } from '../../styles';

const InputArea = styled(Box)({
  width: '210px',
  height: '70%',
  px: 2,
  py: 1,
});

export function SearchBar() {
  const propertyTypes = [
    {
      value: "heey",
      label: "heey"
    }
  ]

  const [type, setType] = React.useState('EUR');

  return (
    <Container>
      <Box
        sx={{
          height: { xs: 35, sm: 75, md: 80 },
          width: { xs: 350, sm: 600, md: 700 },
          backgroundColor: '#fff',
          mx: 6,
          my: -6,
          mb: 3,
          p: 1,
          borderRadius: '1rem',
          display: 'flex',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <InputArea>
          <Input
        startAdornment={
          <InputAdornment position="start">
            <LocationOn />
          </InputAdornment>
        }
        placeholder="Location"
        sx={{ mt: 2 }}
      />
        </InputArea>
        <Divider />
        <InputArea>
          <TextField
          select
            label="Property Type"
            value={type}
            //onChange={handleChange}
            helperText="Select your prefered house type"
            variant="standard"
            fullWidth
          >
            {propertyTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </InputArea>
        <Divider />
        <InputArea>
          <TextField
          select
            label="Price Range"
            value={type}
            //onChange={handleChange}
            helperText="Select your desired price range"
            variant="standard"
            fullWidth
          >
            {propertyTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </InputArea>
      </Box>
    </Container>
  );
}
