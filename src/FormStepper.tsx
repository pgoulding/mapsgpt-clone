import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { StepContent, TextField } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

const steps = ['Places to find', 'Near map location', 'Contact Info'];

export default function FormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [loading, setLoading] = React.useState(false)
  const [formCompleted, completeForm] = React.useState(false)

  const isStepOptional = (step: number) => {
    // set optional steps by index
    return step === 3;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    completeForm(false)
  };

  const handleSubmit = () => {
      setLoading(true)
      // await request to the server
      // pretend to process something for now
      setTimeout(() => {
        setLoading(false)
        completeForm(true)
      }, 2000)
      

  }

  return (
    <Box
    component="form" 
    sx={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          >
          <CircularProgress color="inherit" />
        </Backdrop>
      <Stepper
      sx={{margin:'1rem'}} 
      activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step 
            key={label} 
            {...stepProps}>
              <StepLabel StepIconComponent={PlaceOutlinedIcon}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          { formCompleted ? (
            <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
            </Typography>
          ) : (
              <TextField 
              required
              id="email-address"
              helperText="Enter a valid email address"
              ></TextField>
          )
          }
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent:'space-between'}}>
            <Box sx={{ flex: '1 1 auto' }} />
            {!formCompleted && (<Button onClick={handleSubmit} variant='contained'>Build My Map <MapOutlinedIcon/></Button>)}
            <Button onClick={handleReset}>Restart <RestartAltOutlinedIcon/></Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}