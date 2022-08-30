import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './Scrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontFamily='Poppins'  fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#8B9A46', textTransform: 'capitalize'}}>Target Muscle</span> exercises
    </Typography>
    <Stack sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography  sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontFamily='Poppins'  fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#8B9A46', textTransform: 'capitalize'}}>Equipment</span> exercises
    </Typography>
    <Stack sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
