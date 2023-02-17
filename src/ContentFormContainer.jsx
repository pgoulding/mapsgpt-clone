import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicForm from './BasicForm';
import FormStepper from './FormStepper.tsx';

const ContentFormContainer = () => {

    return (
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: '#cfe8fc', minHeight: 300, padding:"20px"}}>
            {/* <FormStepper /> */}
            <BasicForm />
        </Box>
        </Container>
    )
}

export default ContentFormContainer