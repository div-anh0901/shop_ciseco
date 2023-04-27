import { Box, Chip, Grid, Tooltip } from '@mui/material'
import React, { useState ,FC} from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProductType } from '../utils/type';
import { ProductTypeChoose } from './ProductType';
import { BoxProItem, ChipButton } from '../custom-tag/productItem/BoxProItem';
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
          <BoxProItem>
            <img src={data.image} alt={data.image} onClick={handleClick}  />
            <Box  onClick={()=>setLike(!like)} sx={{
              position:'absolute',
              top:15,
              right: 25,
            }}>
              {like  ? <FavoriteIcon  sx={{color:'red'}} />:<FavoriteBorderOutlinedIcon/>}
            </Box>
            <Box className="chip" >
                <Box  sx={{display:'flex'}}>
                  <ChipButton bg="rgb(15,23,42)" colorChip='white'  label="Add to Card" />
                  <ChipButton   label="View Detail" variant="outlined" />
                </Box>
            </Box>
        </BoxProItem>
       
        <ProductTypeChoose datas={data.type}/>
      </Box>
  </Grid>
  )
}

