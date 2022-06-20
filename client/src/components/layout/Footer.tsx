import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../styles';

function Footer() {
    const styles = {
        width: '30%',
    }
    const styles2 = {
        width: '20%',
        color: '#fff'
    }
    return(
        <Container maxWidth='xl' sx={{
            mt: 4,
            p: 4,
            height: '350px',
            backgroundColor: '#443D5E',
            borderRadius: '50px 50px 0px 0px',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Box style={styles}>
            <Typography
                variant="h5"
                sx={{
                  color: '#fff',
                  py: 1,
                  px: 2,
                  mb:2, 
                  fontSize: '2rem',
                  backgroundColor: '#443D5E',
                  borderRadius: '1rem',
                }}
              >
                Occupy It
              </Typography>
                <Typography sx={{lineHeight: 1.5, mb: 2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore, autem maiores et qui soluta sit fugit neque explicabo ut vitae aperiam. Tempora velit inventore molestias cumque quas dolor quos.</Typography>
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
            </Box >
            <Box style={styles2}>
              <Typography variant='subtitle1'>About</Typography>
            </Box>
            <Box style={styles2}>
              <Typography variant='subtitle1'>Support</Typography>
            </Box>
            <Box style={styles2}>
                <Typography variant='subtitle1'>Contact</Typography>
            </Box>
        </Container>
    )
}
export default Footer;