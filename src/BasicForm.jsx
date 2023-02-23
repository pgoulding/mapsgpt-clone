import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  CircularProgress,
  Typography
} from "@mui/material";
import './BasicForm.css'
import dancingCat from './dancingcat.gif'

const BasicForm = ({idea, toggleShowForm}) => {
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [placeError, setPlaceError] = useState(false);
  const [areaError, setAreaError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (place === "") {
      setPlaceError(true);
    }
    if (area === "") {
      setAreaError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (place !== "" && area !== "" && email !== "") {
      // // do something with the form data, such as sending it to a server
      setLoading(true)
      console.log({ place, area, email });
      
      // // mock waiting for server response 
      const interval = setTimeout(() => {
        setLoading(false)
        toggleShowForm(false)
      }, 5000);
  
      return () => clearInterval(interval);
    }
  };

  useEffect(() => {
    if(idea) {
      setPlace(idea)
    }
  
    return () => {
      
    }
  }, [idea])
  



  const verifyEmail = (inputText) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    console.log(inputText)
    if(inputText.value.match(mailformat)){
      return false
    } else {
      return true
    }
  }

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
    setPlaceError(false);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
    setAreaError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  return (
    <form 
    onSubmit={handleSubmit} 
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:'space-between',
      minHeight:'300px',
      width:'100%',
      padding: '5px',
    }}>
    {loading &&
    <div style={{display:"flex", height:"200px", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
      <Typography>Building your Map...</Typography>
      <CircularProgress sx={{margin:'10px'}}/>
    </div>
    } 
    { !loading &&
    <React.Fragment>
      <FormControl className="formControl">
        <TextField
        fullWidth
          id="place"
          label="Find me these places"
          value={place}
          onChange={handlePlaceChange}
          error={placeError}
          helperText={placeError ? "Please enter a valid kind of place" : ""}
        />
      </FormControl>
      <FormControl className="formControl">
        <TextField
          fullWidth
          id="area"
          label="Near this area"
          value={area}
          onChange={handleAreaChange}
          error={areaError}
          helperText={areaError ? "Please enter a valid location" : ""}
        />
      </FormControl>
      <FormControl className="formControl">
        <TextField
        fullWidth
          id="email"
          label="Email Address"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Please enter a valid email" : ""}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="submitButton"
      >
        Submit
      </Button>
      </React.Fragment>
      }
    </form>
  );
};

export default BasicForm;
