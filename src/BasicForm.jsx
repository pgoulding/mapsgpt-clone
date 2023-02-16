import React, { useState } from "react";
import {
  TextField,
  Button,
  makeStyles,
  FormControl
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: '5px',
  },
  formControl: {
    margin: '10px',
    minWidth: 120,
  },
  submitButton: {
    margin: '10px',
  },
}));

const BasicForm = () => {
  // const classes = useStyles();
  const [places, setPlaces] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [placesError, setPlacesError] = useState(false);
  const [areaError, setAreaError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (places === "") {
      setPlacesError(true);
    }
    if (area === "") {
      setAreaError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (places !== "" && area !== "" && email !== "") {
      // do something with the form data, such as sending it to a server
      console.log({ places, area, email });
    }
  };

  const handlePlacesChange = (event) => {
    setPlaces(event.target.value);
    setPlacesError(false);
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
          height:'100%',
          justifyContent:'space-between',
          padding: '5px',
        }}>
      <FormControl 
        style={{
          minWidth: 180,
        }}>
        <TextField
          id="places"
          label="Places"
          value={places}
          onChange={handlePlacesChange}
          error={placesError}
          helperText={placesError ? "Please enter a valid place" : ""}
        />
      </FormControl>
      <FormControl
        style={{
          minWidth: 120,
        }}>
        <TextField
          id="area"
          label="Area"
          value={area}
          onChange={handleAreaChange}
          error={areaError}
          helperText={areaError ? "Please enter a valid area" : ""}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="email"
          label="Email"
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
      >
        Submit
      </Button>
    </form>
  );
};

export default BasicForm;
