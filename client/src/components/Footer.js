import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/banner-footer-8.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '600px', height: '50px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '50px', xs: '35px' } }} mt="41px" textAlign="center" pb="40px">Keep up the WORK!</Typography>
  </Box>
);

export default Footer;
