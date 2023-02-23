import * as React from 'react';
import { useState, useEffect } from 'react';
import logo from './mapsGPT-logo.png';
import './App.css';
import { Box, Typography, AppBar, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import MarqueeText from './MarqueeText';
import LeaderBoard from './LeaderBoards';
import BasicForm from './BasicForm';
import MapBox from './MapBox';

function App() {
  
  // could refactor these into fetches for real-time data

  const marqueeTextArr = [
    'Romantic Sunrise',
    'Places to get my creeative juices flowing', 
    'Easiest places to crash a wedding', 
    'Spots to break up with your partner', 
    'Places to paddleboard', 
    'Insta pictures spots', 
    'Where to casually run into a billionaire', 
    'Galentines day spots', 
    'Where to find fireflies', 
    'Places to have a shot encounter', 
    'Secret Societies'
  ]

  const mostViewed = [
    "First dates near Paris",
    "jazz bar near atlanta",
    "unique restaurant to impress my inlaws near baltimore",
    "spots to hook up with strangers near Seattle",
    "dog parks with grass near New York City",
    "cozy places to read in the winter near seattle",
    "sports teams that lose the most near texas",
    "Restaurants with flavorful good and vegetarian friendly near Sunnyvale",
    "locations to impress my girlfriend near troy, michigan",
    "instagrammable places near Nashville"
  ]

  const funnyPrompts = [
    "discretely scratch my bum",
    "worst places to take a nap near seattle",
    "places with a ghost encounter near Austin",
    "silly sushi shoppes near japan",
    "discretely scratch my bum",
    "Worst date locations near Sunnyvale",
    "cemeteries with good views near washington d.c."
  ]

  const oddlySpecific = [
    "places to jam on my banjo near Fleming Island",
    "places to sit and ponder the universe near Green Cove Springs",
    "unsolved mysteries near united states",
    "really rusty things near seattle",
    "a place to watch meteor showers near San Francisco",
    "purple places near kentucky",
    "places where people are chatty near kansas"
  ]

  const [idea, setIdea] = useState('')
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {
    // default to a location near the user
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      // send to an API call to fetch the closest city
    });
  
    return () => {
      
    }
  }, [])
  


  const selectIdea = (passedIdea) =>{
    console.log(passedIdea)
    setIdea(passedIdea)
  }

  const toggleShowForm = (toggle) =>{
    setShowForm(toggle)
  }


  return (
    <div className="App">
        <AppBar position='sticky' sx={{flexDirection:'row',background:'#fcac08', height:'2rem'}}>
            <MarqueeText textArray={marqueeTextArr} selectIdea={selectIdea}/>
        </AppBar>
        <div>
          <img src={logo} style={{maxWidth:"100%", height:'auto'}}/>
        </div>
        { showForm &&

          <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', minHeight: 300, padding:"20px"}}>
                <BasicForm idea={idea} toggleShowForm={toggleShowForm}/>
          </Box>
        </Container>
        }
        { !showForm && 
          <MapBox idea={idea} toggleShowForm={toggleShowForm}/>
        }
      <Typography sx={{ mt: 2, mb: 1, padding:'1rem', fontStyle:'italic', color:'GrayText'}}>
        This map is curated out of aggregated data, however we can not guarantee it is completely accurate or is up to date. We recommend contacting locations on the map to verify the details. We are not responsible for any actions you take based on the produced map.
      </Typography>

      <Typography variant='h4'>
        DAILY LEADERS
      </Typography>
      <Box sx={{
        width:'100%',
        height:'400px',
        flexGrow:1
        }}>
        <Grid 
          container 
          spacing={{xs:2, md:3}} 
          // columns={{ xs: 4, sm: 8, md: 12 }} 
          sx={{margin:'auto', alignItems:'flex-start'}}>
          <Grid xs={12} s={6} md={4} >
            <LeaderBoard items={mostViewed} cardTitle={"MOST VIEWED"} />
          </Grid>
          <Grid xs={12} s={6} md={4}>
            <LeaderBoard items={funnyPrompts} cardTitle={"PROMPTS TO MAKE YOU LAUGH"} />
          </Grid>
          <Grid xs={12} s={6} md={4} >
            <LeaderBoard items={oddlySpecific} cardTitle={"ODDLY SPECIFIC"} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
