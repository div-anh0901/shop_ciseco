import React from 'react'
import {Box,Button,Grid,Stack, Typography} from '@mui/material';
import { Image } from '../assets';
import { Step } from '../utils/type';

type Props={
    datas:Step[],
}

const  StepBuy = ({datas}:Props)=> {
  return (
    <Box>
        <Grid container spacing={2}>
            {datas.map((data)=>(
                <Grid md={3} item sx={{
                    display:'flex',
                    width:'100%'
                }}>
                    <Box sx={{
                        width:'inherit',
                        margin:'0 auto',
                        display:'flex',
                        flexDirection: "column",
                        alignItems:'center',
                        fontFamily:'Roboto, sans-serif',
                        '& img':{
                            width:'150px',
                            height: '150px',
                            margin:'0 0 20px 0'
                        },
                    }}> 
                        <img src={data.img} alt={data.img}/>
                        <Box sx={{
                            color:'rgb(153,27,27)',
                            backgroundColor:'rgb(254,226,226)',
                            textTransform: 'none',
                            padding:'10px',
                            margin:'10px',
                            
                            borderRadius:'10px',
                            display:''
                        }}>{data.step}</Box>
                        <Box sx={{
                            fontSize:'20px',
                            fontWeight:700,
                            margin:'10px'
                           
                        }}>{data.title}</Box>
                        <Box sx={{
                            textAlign:'center',
                            width:'80%',
                            margin:'10px 0'
                        }}>{data.des}</Box>
                    </Box>
                </Grid>
            ))}
            
        </Grid>
    </Box>
  )
}

export default StepBuy