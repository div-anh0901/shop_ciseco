import { Box, Chip, Grid, Tooltip } from '@mui/material'
import React, { useState ,FC} from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProductType } from '../utils/type';
import { ProductTypeChoose } from './ProductType';
type Props={
    data: ProductType
}
export const  ProductItem: FC<Props>= ({data}) => {

  const [like,setLike] = useState(false);
  const  handleClick =()=>{
}
//rgb(15,23,42)
  return (
    <Grid item md={3} >
      <Box >
          <Box sx={{
            backgroundColor:"rgb(248,250,252)",
            boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            width: 'inherit',
            height: '400px',
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: '20px',
            position:'relative',
            "& img":{
              width: 'inherit',
              height: '400px',
            },
            "&:hover":{
              ".chip":{
                display:'block'
              }
            }
          }}>
            <img src={data.image} alt={data.image} onClick={handleClick}  />
            <Box  onClick={()=>setLike(!like)} sx={{
              position:'absolute',
              top:15,
              right: 25,
            }}>
              {like  ? <FavoriteIcon  sx={{color:'red'}} />:<FavoriteBorderOutlinedIcon/>}
            </Box>
            <Box className="chip"   sx={{
              color:'black',
              width: "inherit",
              position: 'absolute',
              bottom: 20,
              display: "none"
              
            }}>
                <Box  sx={{display:'flex'}}>
                  <Chip  sx={{
                    boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                     margin: "5px",
                     width: "150px",
                     cursor:'pointer',
                     backgroundColor:'rgb(15,23,42)',
                     color:'white',
                    '&:active':{
                      border: '2px solid blue',
                      padding: '3px'
                    } 
                    }} label="Add to Card" />
                  <Chip sx={{
                      boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                      margin: "5px",width: "150px",
                      cursor:'pointer',
                      '&:active':{
                        border: '2px solid blue',
                        padding: '3px'
                      } 
                    }} label="View Detail" variant="outlined" />
                </Box>
            </Box>
        </Box>
       
        <ProductTypeChoose datas={data.type}/>
      </Box>
  </Grid>
  )
}

