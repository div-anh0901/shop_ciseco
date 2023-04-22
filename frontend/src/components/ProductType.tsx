import React,{useState,FC} from 'react'
import {Box} from '@mui/material';
type Props ={
    data  : string;
}

export const  ProductTypeChoose:FC<Props>=({data})=> {
    const [typeP,setTypeP] = useState(false);
    const  handleClick =()=>{
        alert(1)
    }
  return (
    <Box   onClick={handleClick} sx={{
        width:'25px',
        height:'25px',
        display:'flex',
        cursor:'pointer',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
        border: typeP ? `1px solid ${data}` :'',
      }}>
        <Box 
          sx={{
            width:'20px',
            height:'20px',
            margin:'10px 3px',
            borderRadius:'50%',
            backgroundColor:data
          }}>
       </Box>

       </Box>
  )
}

