import { Grid ,Container, Typography,Card, Box, Button, RadioGroup, FormControlLabel, Radio} from '@mui/material'
import { Navbar } from '../components/Nabar'
import { Banner } from '../components/Banner'
import {useState}from 'react';
import { Image } from '../assets'
import { ProductData, StepData } from '../data'
import {ProductItem} from '../components/ProductItem';
import StepBuy from '../components/StepBuy';

export default function Home() {


  return (
    <Grid>
        <Navbar/>
        <Banner/>
        <Container maxWidth="xl">
          <Grid sx={{margin: "30px 0"}}>
            <Typography variant='h4' sx={{
              fontFamily: 600,
              '& span':{
                color: "#ccc"
              }
              }}>  
              Discover more. <span>Good things are waiting for you</span>
            </Typography>
            <Grid container spacing={2} sx={{
              marginTop:"30px"
            }}>
                <Grid item  xs={12} sm={6} md={4}>
                    <Box sx={{height: "250px",backgroundColor: "rgb(254,252,232)" ,borderRadius: "20px",
                      display: "flex",
                      alignItems:'center',
                      justifyContent:'space-between',
                      cursor: 'pointer',
                    "& img":{
                      width: "50%",
                      height: "200px",
                      padding:"10px"
                    },
                    "&:hover":{
                      backgroundColor: "rgba(0,0,0,0.1)"
                    }
                  }}>
                      <Box sx={{padding:"10px"}}>
                        <Typography sx={{fontSize:"20px", margin:"10px 0"}}>Explore new arrivals</Typography>
                        <Typography variant='h5' sx={{fontWeight:700,fontSize:"25px",margin:"10px 0"}}>Shop the latest from top brands</Typography>
                        <Button sx={{
                          backgroundColor:'white',
                          padding:'10px',
                          borderRadius:'10px',
                          color:  'black'
                        }}>Show me all</Button>
                      </Box>
                      <img src={Image.shop_ao}  alt={Image.shop_ao}/>
                    </Box>
                </Grid>
                <Grid item  xs={12} sm={6} md={4}>
                    <Box sx={{height: "250px",backgroundColor: "rgb(254,242,242)" ,borderRadius: "20px",
                      display: "flex",
                      alignItems:'center',
                      justifyContent:'space-between',
                      cursor: 'pointer',
                    "& img":{
                      width: "50%",
                      height: "200px",
                      padding:"10px"
                    },
                    "&:hover":{
                      backgroundColor: "rgba(0,0,0,0.1)"
                    }
                  }}>
                      <Box sx={{padding:"10px"}}>
                        <Typography sx={{fontSize:"20px", margin:"10px 0"}}>Sale collection</Typography>
                        <Typography variant='h5' sx={{fontWeight:700,fontSize:"25px",margin:"10px 0"}}>Up to 80% off retail</Typography>
                        <Button sx={{
                          backgroundColor:'white',
                          padding:'10px',
                          borderRadius:'10px',
                          color:  'black'
                        }}>Show me all</Button>
                      </Box>
                      <img src={Image.shop_bong}  alt={Image.shop_bong}/>
                    </Box>
                </Grid>
                <Grid item  xs={12} sm={6} md={4}>
                    <Box sx={{height: "250px",backgroundColor: "rgb(239,246,255)" ,borderRadius: "20px",
                      display: "flex",
                      alignItems:'center',
                      justifyContent:'space-between',
                      cursor: 'pointer',
                    "& img":{
                      width: "50%",
                      height: "200px",
                      padding:"10px"
                    },
                    "&:hover":{
                      backgroundColor: "rgba(0,0,0,0.1)"
                    }
                  }}>
                      <Box sx={{padding:"10px"}}>
                      <Typography sx={{fontSize:"20px", margin:"10px 0"}}>Sale collection</Typography>
                        <Typography variant='h5' sx={{fontWeight:700,fontSize:"25px",margin:"10px 0"}}>Up to 80% off retail</Typography>
                        <Button sx={{
                          backgroundColor:'white',
                          padding:'10px',
                          borderRadius:'10px',
                          color:  'black'
                        }}>Show me all</Button>
                      </Box>
                      <img src={Image.shop_tui}  alt={Image.shop_tui}/>
                    </Box>
                </Grid>
            </Grid>
          </Grid>

          <Grid sx={{margin:"30px 0"}}>
            <Typography variant='h4' sx={{
                fontFamily: 600,
                '& span':{
                  color: "#ccc"
                }
              }}> 
                  New Arrivals. <span>Rey  Backpacks & Bags </span>
              </Typography>

              <Grid sx={{margin: "20px 0"}}>
                <Grid container  spacing={5}>
                    {ProductData.map((data,index)=> (
                        <ProductItem data={data} key={index}/>
                    ))}
                    
                </Grid>
              </Grid>
          </Grid>

          <Grid 
            sx={{
              height:'200px',
              display:'flex',
              alignItems:'center',
              width:'100%',
              '& div':{
                height:'1px',
                width:'100%',
                backgroundColor:'#ccc'
              }
            }}
          >
            <div></div>
          </Grid>
          <Grid sx={{margin:"30px 0"}}>
              <StepBuy  datas={StepData}/>
          </Grid>

          <Grid 
            sx={{
              height:'200px',
              display:'flex',
              alignItems:'center',
              width:'100%',
              '& div':{
                height:'1px',
                width:'100%',
                backgroundColor:'#ccc'
              }
            }}
          >
            <div></div>
          </Grid>
        </Container>
    </Grid>
  )
}
