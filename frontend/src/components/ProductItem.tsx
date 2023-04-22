import { Box, Grid } from '@mui/material'
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

  return (
    <Grid item md={3}>
    <Box sx={{
      backgroundColor:"rgb(248,250,252)",
      width: '345px',
      height: '300px',
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: '20px',
      position:'relative'
    }}>
      <img src={data.image} alt={data.image} />
      <Box onClick={()=>setLike(!like)} sx={{
        position:'absolute',
        top:15,
        right: 15
      }}>
        {like  ? <FavoriteIcon  sx={{color:'red'}} />:<FavoriteBorderOutlinedIcon/>}
      </Box>
    </Box>
    <Box
      sx={{
        display:'flex'
      }}
    >
        {data.type.map((t,index)=>(
          <ProductTypeChoose key={index} data={t}/>
        ))}
    </Box>
  </Grid>
  )
}
