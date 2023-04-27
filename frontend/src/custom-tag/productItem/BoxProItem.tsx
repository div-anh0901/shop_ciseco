import { Box, styled,Chip } from "@mui/material";


export const BoxProItem = styled(Box)(({ theme }) => ({
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
    },
    ".chip":{
        color:'black',
        width: "inherit",
        position: 'absolute',
        bottom: 20,
        display: "none"
    }
}));

type ChipType = {
    bg?: string| null;
    colorChip?: string| null;
}

export const ChipButton =styled(Chip)<ChipType>(({ theme,bg,colorChip }) => ({
    boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    margin: "5px",
    width: "150px",
    cursor:'pointer',
    backgroundColor:bg===null?'' : bg ,
    color:colorChip == null  ?'': colorChip,
    '&:active':{
        border: '2px solid blue',
        padding: '3px'
    } 
}));
