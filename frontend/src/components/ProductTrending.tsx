import React, { useState } from 'react'
import {Box,Typography,Grid,Paper,Theme,FormControlLabel,Switch,Fade, Button} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryProduct from './CategoryProduct'
const datas =[{
    id:1,
    label:'All Items'
},
{
    id:2,
    label:'Women'
},
{
    id:3,
    label:'Men'
},
{
    id:4,
    label:'Kids',
    
},
{
    id:5,
    label:'Jewels'
}
]

const dataFilter = [{

}]

function ProductTranding() {
    const [cate,setCate] =  useState(1);
    const [showFilter, setShowFilter] = useState(false)

  return (
    <Box>
        <Typography variant='h3'>What's trending now</Typography>
        <Typography sx={{
            color:'#ccc',
            margin:'15px 0',
            fontSize:'20px'
        }}>Discover the most trending products in Hannoi</Typography>
        <Grid container sx={{height:'80px'}}>
            <Grid  item md={11} sx={{
                fontFamily:'Roboto, sans-serif',
                display:'flex',
            }}>
                {datas.map((data)=>(
                    <CategoryProduct key={data.id} setCate={(id)=>setCate(id)}  cate={cate} id={data.id} label={data.label} />
                ))}
            </Grid>
            <Grid item md={1}>
                <SimpleFade setShowFilter={(showFilter)=> setShowFilter(showFilter)} showFilter={showFilter}/>
            </Grid>
            
        </Grid>
        <Box>
            <Fade in={showFilter}>
                    <Paper sx={{ margin:0,padding:0 ,boxShadow:'none'}}>
                        <Box>
                            Data Filters
                        </Box>
                    </Paper>
                </Fade>
            </Box>
    </Box>
  )
}

type Props = {
    setShowFilter: (check: boolean) => void,
    showFilter: boolean
}

function SimpleFade(data: Props) {
    const handleChange = (showFilter: boolean) => {
        data.setShowFilter(!showFilter);
    };
  
    return (
      <Box sx={{ height: 180 }}>
        <Box onClick={()=>handleChange(data.showFilter)} sx={{
            cursor:'pointer',
            width: "100px",
            lineHeight:'50px',
            background:'black',
            color:'white',
            display:'flex',
            borderRadius:'10px',
            alignItems:'center',    
            justifyContent:'center',
            fontFamily:'Roboto, sans-serif'
        }} >Filter {data.showFilter ?<ExpandMoreIcon/> : <ExpandLessIcon/> }</Box>
       
      </Box>
    );
  }

  

export default ProductTranding