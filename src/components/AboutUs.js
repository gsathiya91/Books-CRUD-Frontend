import { Box, Typography } from '@mui/material';
import React from 'react';

function AboutUs(){
    return(
        <>
        <Box className='aboutus'>
            <Typography variant="h6">
                This is a CRUD Application<br /> for <br />Books management system <br />
                using<br /> MERN Stack
            </Typography>

        </Box>
        </>
    )
}

export default AboutUs;