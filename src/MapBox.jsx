import { Button, Grid, Link, Typography } from "@mui/material";
import { Box, margin } from "@mui/system";
import React, { useEffect, useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

import loadingMap from './mgpt_loading.gif'
import miniMap from './example-mini-map.jpeg'
const MapBox = ({idea, toggleShowForm}) => {

    return (
        <Grid 
        container 
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        >
            <Grid item xs={10} md={6}>
                <Box sx={{bgcolor: '#cfe8fc', minHeight:"400px", boxShadow:"3px 3px 5px 0px rgba(0,0,0,0.75)"}}>
                    <Box sx={{height:'380px'}}>

                        <img style={{width:"100%", height:"100%"}} src={loadingMap} alt="loading map"/>
                    {/* Display the generated map here */}
                    </Box>
                    <div style={{display:"flex", justifyContent:"space-around", padding:"5px"}}>
                        <Button
                        sx={{margin:"5px", fontWeight:900}}
                        variant="contained"
                        className="submitButton">
                            <EditLocationOutlinedIcon/>
                            Make Edits & add more points
                        </Button>
                        <Button
                            className="submitButton"
                            variant="contained"
                            onClick={() => toggleShowForm(true)}
                            sx={{margin:"5px", fontWeight:900}}
                            >
                                <RestartAltOutlinedIcon/>
                            Reset and try again
                        </Button>
                    </div>
                </Box>
            </Grid>
            <Grid item xs={10} md={4}>
                <Box sx={{ minHeight:"200px", display:'flex', flexDirection:"column", justifyContent:'center', margin:"5px auto"}}>
                    <Typography>Share your {idea} map!</Typography>
                        <img src={miniMap} alt="mini map share"  style={{maxWidth:"320px", height:'auto', boxShadow:"1px 1px 3px 0 #000", transform:"rotate(-9deg)", margin:"20px auto"}} />
                    <Link>Get Vertical Image</Link>
                    <Link>Get Horizontal Image</Link>
                    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="submitButton"
                    sx={{margin:"5px auto"}}>
                        <TwitterIcon/>
                        Twitter
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="submitButton"
                    sx={{margin:"5px auto"}}>
                        <FacebookIcon/>
                        Facebook
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="submitButton"
                    sx={{margin:"5px auto"}}>
                        <EmailIcon/>
                        Email
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="submitButton"
                    sx={{margin:"5px auto"}}>
                        <ShareIcon/>
                        Copy Map Link
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MapBox