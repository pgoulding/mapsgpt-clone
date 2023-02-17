import React, { useState, useEffect } from "react";
import { Fade, Typography } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const MarqueeText = ({ textArray }) => {
  // const classes = useStyles();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      style={{margin:'auto', display:'flex'}}

    >
      <Fade in={true} timeout={1000}>
        
        <Typography><LightbulbOutlinedIcon/> {textArray[currentTextIndex]}</Typography>
      </Fade>
    </div>
  );
};

export default MarqueeText;