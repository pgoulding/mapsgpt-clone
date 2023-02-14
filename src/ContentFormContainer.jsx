import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormStepper from './FormStepper.tsx';

const ContentFormContainer = () => {

    return (
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: '#cfe8fc', height: 300, padding:"20px"}}>
            <FormStepper />
        </Box>
        </Container>
    )
}

export default ContentFormContainer