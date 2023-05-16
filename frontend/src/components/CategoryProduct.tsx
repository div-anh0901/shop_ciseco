import React from 'react';
import {Box} from '@mui/material'

type Props =  {
    id: number;
    label: string;
    cate: number;
    setCate: (id: number)=>void ;
}

function CategoryProduct(data :Props ) {
    const handleOnClick = (id:number)=>{
        data.setCate(id);
        console.log(data.cate)
    }
  return (
    <Box sx={{
        height:"50px",
        width: "100px",
        lineHeight:'50px',
        textAlign:'center',
        margin:'0 10px 0 0',
        borderRadius:'10px',
        backgroundColor: data.cate === data.id ? 'black' : '',
        color: data.cate === data.id ? 'white' : '',
        cursor:'pointer'
    }} onClick={()=>handleOnClick(data.id)} >{data.label}</Box>
  )
}

export default CategoryProduct