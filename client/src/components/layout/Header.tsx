import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AppBarTwicked, ToolBarTwicked } from '../../styles/layoutStyles';
import { CustomButton } from '../utils';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarTwicked position="static" elevation={0}>
        <Container maxWidth="xl">
          <ToolBarTwicked sx={{ justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                width: '70%',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#fff',
                  py: 1,
                  px: 2,
                  backgroundColor: '#443D5E',
                  borderRadius: '1rem',
                }}
              >
                Occupy It
              </Typography>
              <Box
                sx={{
                  width: '45%',
                  display: 'flex',
                  mx: 8,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#7C28F2',
                }}
              >
                <Typography variant="h6">Home</Typography>
                <Typography variant="h6">Services</Typography>
                <Typography variant="h6">Projects</Typography>
              </Box>
            </Box>
            <Box>
              <CustomButton
                sx={{
                  borderRadius: '3rem 3rem 0 3rem',
                  backgroundColor: '#7C28F2',
                  color: '#fff',
                }}
              >
                Blog
              </CustomButton>
            </Box>
          </ToolBarTwicked>
        </Container>
      </AppBarTwicked>
    </Box>
  );
}

export default Header;
