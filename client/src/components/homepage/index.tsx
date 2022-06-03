import { Container } from '@mui/material';
import React from 'react';
import AboutUs from './AboutUs';
import Hero from './Hero';
import SearchBar from './SearchBar';
import WhatWeDo from './WhatWeDo';

function HomePage() {
    return (
        <Container maxWidth="xl"
            sx={{
                overflow: 'hidden',
            }}
        >
            <Hero />
            <SearchBar />
            <WhatWeDo />
            <AboutUs />
        </Container>
    )
}

export default HomePage;