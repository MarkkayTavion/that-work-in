import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import MainImage from "../assets/images/MainImage.jpg"

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">GET THAT WORK!</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      We Do, <br />
      We Sweat, <br />
      We Love

    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Learn the CORRECT way to do any exercise!<br />
      Let's put in THAT WORK! NO INJURIES!
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Check out some Exercises!</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={MainImage} alt="weights" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;