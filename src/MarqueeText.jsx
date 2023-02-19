import React, { useState, useEffect } from "react";
import { Fade, Typography } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import './MarqueeText.css'

const MarqueeText = ({ textArray, selectIdea }) => {

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightFilled, setLightFilled] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, textArray]);

  const handlePause = () => {
    setIsPaused(true);
    setLightFilled(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    setLightFilled(false)
  };

  const handleIdea = (idea) => {
    //maybe something to populate the idea into the form input?
    console.log('MarqueeText', idea)
    selectIdea(idea)
  }

  return (
    <div
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onClick={() => handleIdea(textArray[currentTextIndex])}
      style={{margin:'auto', display:'flex'}}
    >
      <Fade in={true} timeout={1000}>

          
          <Typography className="marqueeText"> {lightFilled ?  <LightbulbIcon/> : <LightbulbOutlinedIcon />} {textArray[currentTextIndex]}</Typography>

      </Fade>
    </div>
  );
};

export default MarqueeText;