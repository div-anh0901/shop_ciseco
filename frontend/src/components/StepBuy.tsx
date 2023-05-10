import React from 'react'
import {Box,Button,Grid,Stack, Typography} from '@mui/material';
import { Image } from '../assets';
function StepBuy() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid md={3} item sx={{
                display:'flex',
                alignItems:'center',
                width:'100%'
            }}>
                <Box sx={{
                    
                    '& img':{
                        width:'150px',
                        height: '150px',
                    },
                }}> 
                    <img src={Image.HIW1img} alt={Image.HIW1img}/>
                    <Typography sx={{
                        color:'rgb(153,27,27)',
                        backgroundColor:'rgb(254,226,226)',
                        textTransform: 'none',
                        borderRadius:'10px'
                    }}> Step 1</Typography>
                    <Typography>Filter & Discover</Typography>
                    <Typography>Smart filtering and suggestions make it easy to find</Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default StepBuy