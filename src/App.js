import * as React from 'react';
import logo from './mapsGPT-logo.png';
import './App.css';
import ContentFormContainer from './ContentFormContainer';
import { Box, Typography, AppBar, Toolbar, Slide, Paper, Card } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import MarqueeText from './MarqueeText';

function App() {
  
  const textyTexterson = [
    'lorem ipsum dolor sit amet consectetur',
    'adipiscing elit curabitur vel hendrerit libero eleifend', 
    'blandit nunc ornare odio ut orci', 
    'gravida imperdiet nullam purus lacinia a pretium', 
    'quis congue praesent sagittis laoreet auctor', 
    'mauris non velit eros dictum proin accumsan', 
    'sapien nec massa volutpat', 
    'venenatis sed eu molestie', 
    'lacus quisque porttitor ligula', 
    'dui mollis tempus at magna vestibulum', 
    'turpis ac diam'
  ]

  return (
    <div className="App">
        <AppBar position='sticky' sx={{flexDirection:'row',background:'#fcac08', height:'2rem'}}>
            <MarqueeText textArray={textyTexterson} />
        </AppBar>
        <Box>

              </Box>
        <div>
          <img src={logo} />
        </div>
      <ContentFormContainer />
      <Typography sx={{ mt: 2, mb: 1, padding:'1rem', fontStyle:'italic', color:'GrayText'}}>
        This map is curated out of aggregated data, however we can not guarantee it is completely accurate or is up to date. We recommend contacting locations on the map to verify the details. We are not responsible for any actions you take based on the produced map.
      </Typography>

      <Typography>
        Daily Leaders
      </Typography>
      <Box sx={{
        width:'100%',
        height:'400px',
        flexGrow:1
        }}>
        <Grid container>
          <Grid xs={4}>
          <Card sx={{ bgcolor: '#cfe8fc', height: 300, padding:"20px", margin:'20px'}}>
            <Typography>MOST VIEWED</Typography>
          </Card>  
          </Grid>
          <Grid xs={4}>
          <Card sx={{ bgcolor: '#cfe8fc', height: 300, padding:"20px", margin:'20px'}}>
            <Typography>FUNNIEST</Typography>
          </Card>
          </Grid>
          <Grid xs={4}>
          <Card sx={{ bgcolor: '#cfe8fc', height: 300, padding:"20px", margin:'20px'}}>
            <Typography>ODDLY SPECIFIC</Typography>
          </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
