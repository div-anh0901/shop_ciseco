import React,{useState,FC} from 'react'
import {Box} from '@mui/material';
type Props ={
    datas  : string[];
}

export const  ProductTypeChoose:FC<Props>=({datas})=> {

    const [typeP,setTypeP] = useState(false);
    const [typePindex,setTypeIndex] = useState(0);
    
    const  handleClick =(index: number)=>{
      if(typeP === true && typePindex !== index){
        setTypeP(true)
      }
      setTypeIndex(index);
      if(typeP === false && typePindex === index){
        setTypeP(true)
      }
    }
  return (
    <Box  sx={{
      display:'flex',
     
    }}>
      {datas.map((data,index)=>(
         <Box key={index}  sx={{
          width:'25px',
          height:'25px',
        
          display:'flex',
          cursor:'pointer',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:'50%',
          border: typeP && typePindex === index ? `1px solid ${data}` :'',
        }}>
          <Box 
            onClick={()=>handleClick(index)}
            sx={{
              width:'20px',
              height:'20px',
              margin:'10px 3px',
              borderRadius:'50%',
              backgroundColor:data
            }}>
         </Box>
        </Box>
      ))}
    </Box>
  )
}

