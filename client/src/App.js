import './App.css';
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import work from './images/work.jpg';


function App() {
  return (
      <Container maxWidth='lg'>
        <AppBar position='static' color='inherit'>
          <Typography variant="h2" align="center">That Work In</Typography>
          <img src={work} alt="That Work In" height="400"/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                  <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
}

export default App;
