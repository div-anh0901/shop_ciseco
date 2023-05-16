import { Box, 
    Grid,
    Typography,
    Dialog,
    Stack,
    Accordion,
    Chip,
    AccordionSummary,
    AccordionDetails
  } from '@mui/material'
import React, { useState ,FC,useEffect} from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProductType } from '../utils/type';
import { ProductTypeChoose } from './ProductType';
import AddIcon from '@mui/icons-material/Add';
import { BoxProItem, ChipButton } from '../custom-tag/productItem/BoxProItem';
import StarIcon from '@mui/icons-material/Star';
import { Image, ImageColor } from "../assets";
type Props={
    data: ProductType
}
export const  ProductItem: FC<Props>= ({data}) => {
  const [like,setLike] = useState(false);
  const [open,setOpen] = useState(false);
  const [selectedValue,setSelectedValue] = useState("hoanganhdeptrai");
  const  handleClick =()=>{
    setOpen(true)
  }
  const handleClose =(value: string)=>{
    setOpen(false);
    setSelectedValue(value);
  }
//rgb(15,23,42)
  return (
    <Grid item md={3} >
      <Box >
          <BoxProItem>
            <img src={data.image} alt={data.image}  />
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
                  <ChipButton  onClick={handleClick}  label="View Detail" variant="outlined" />
                </Box>
            </Box>
        </BoxProItem>
        <Box sx={{
          margin:'10px 0'
        }}>
          <ProductTypeChoose datas={data.type}/>
        </Box>
        
        <Box sx={{
          margin:'10px 0'
        }}>
          <Typography  sx={{
            margin:'10px 0',
            fontWeight: 500,
            fontSize:'20px'
          }}>
              {data.name}
          </Typography>
          <Typography sx={{
              margin:'10px 0',
            color:'#615151'
          }}>
              {data.des}
          </Typography>
          <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
            <Typography>
                {data.price}$
            </Typography>
            <Typography sx={{display:'flex', alignItems:'center'}}>
              <StarIcon sx={{color:'yellow'}}/> {data.rating} 
            </Typography>
          </Box>
        </Box>
      </Box>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
  </Grid>
  )
}


export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const DataSize = ["XS","S","M","L","XL"]

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [typeColor,setTypeColor] = useState(false);
  const [typeTypedex,setTypeIndex] = useState(0);
  const  [size,setSize] = useState<any>({
    index: 0,
    value: "XS",
    check: true
  });
  const handleClose = () => {
    onClose(selectedValue);
  };

  // const handleListItemClick = (value: string) => {
  //   onClose(value);
  // };

  const handleClickTypeColor =(index:number)=>{
    if(typeColor === true && typeTypedex !== index){
      setTypeColor(true)
    }
    setTypeIndex(index);
    if(typeColor === false && typeTypedex === index){
      setTypeColor(true)
    }
  }

  const handleClickSize = (value: string , index: number)=>{
   
    if(size.check === true && size.index !== index){
      size.check = true;
      setSize({...size});
    }
    size.index = index
    size.value = value;
    setSize({...size});
    if(size.check === false && size.index !== index){
      size.check = true;
      setSize({...size});
    }
  }

  

  return (
    <Dialog onClose={handleClose} fullWidth={true}  maxWidth="lg"   open={open}>
        <Grid container maxWidth="lg" sx={{
          maxWidth:'100%',
          height:"650px",
          background:'white'
        }}>
          <Grid item sx={{
             padding:'20px',
          }} md={6}>
            <Box sx={{
               '&>img':{
                width:'100%',
                height:'400px',
                marginBottom:'10px',
                borderRadius:"10px"
              }
            }}>
              <img src={Image.productDetail} alt={Image.productDetail}/>
                <Box sx={{
                  display:'flex',
                  width:'100%', 
                  '& img':{
                    widht: "200px",
                    height: "300px",
                    borderRadius:"10px"
                  },
                  alignItems:'center',
                  justifyContent:'space-between'
                }}>
                  <img src={Image.productDetail1} alt={Image.productDetail1}/>
                  <img src={Image.productDetail2} alt={Image.productDetail2}/>
                </Box>
            </Box>
          </Grid>
          <Grid item sx={{
             padding:'20px',
          }} md={6}>
              <Typography variant='h4'>Heavy Weight Shoes</Typography>
              <Box sx={{
                display:'flex',
                alignItems:'center',
                margin:'20px 0 30px 0',
                fontSize:'20px'
              }}>
                <Box sx={{
                  marginRight:'20px',
                  color:'rgb(34,197,94)',
                  padding:'5px  10px',
                  fontFamily:'Roboto',
                  fontWeight: 700,
                  border:'2px solid rgb(34,197,94)',
                  borderRadius:'5px'
                }}>112$</Box>
                |
                <Box  sx={{
                display:'flex',
                alignItems:'center',
                marginLeft:"20px",
                marginRight:'20px ',
                fontWeight: 700,
                fontFamily:'Roboto'
              }}>
                  <StarIcon sx={{color:'yellow'}}/> 4.9 (142 reviews)
                </Box>
                <Box>
                  New In
                </Box>
              </Box>

              <Box>
                <Typography sx={{fontWeight:500}}>Color :</Typography>
                <Stack direction="row" sx={{
                  margin:'10px 0',
                }}   spacing={2}>
                  {ImageColor.map((data,index)=>(
                    <Box key={index} sx={{
                      '& img':{
                        width: "90px",
                        height:'40px',
                        borderRadius:'30px',
                        border: typeColor=== true && typeTypedex === index? '2px solid blue': '',
                        padding: '2px',
                        '&:active':{
                          border:'1px solid blue'
                        }
                      }
                    }}> 
                        <img onClick={()=>handleClickTypeColor(index)} src={data} key={index}/>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{margin:'20px 0'}}>
                <Typography sx={{margin:'10px 0'}}>Size : {size.value}</Typography>
                <Stack direction="row" spacing={2}>
                  {
                    DataSize.map((data,index)=>(
                      <Box onClick={()=> handleClickSize(data,index)} key={index} sx={{
                        padding:'10px',
                        width:'30px',
                        height:'20px',
                        cursor:'pointer',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor: size.index === index && size.check ===true ? 'blue': '',
                        color: size.index === index && size.check ===true ? 'white': '',
                        borderRadius:'15px',
                        fontWeight:600,
                        border: '2px solid blue'
                      }}>
                          {data}
                      </Box>
                    ))
                  }
                </Stack>
              </Box>

              <Box>
                <Stack direction="row"   spacing={2}>
                    <Stack sx={{
                        backgroundColor:'rgba(241,245,249,0.7)',
                        padding: '15px 15px',
                        fontSize:'30px',
                        borderRadius:'20px'
                      }} direction="row" alignItems="center" justifyContent="center" spacing={4}>
                      <Box sx={{
                        width:'30px',height: '30px',background:'white',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        border:'1px solid black',
                        borderRadius:'50%',
                      }}><RemoveIcon/></Box>
                      <Box>1</Box>
                      <Box sx={{
                        width:'30px',height: '30px',background:'white',display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        border:'1px solid black',
                        borderRadius:'50%',
                      }}><AddIcon/></Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="center"  width="100%"  spacing={2}>
                      <Box sx={{
                        background:'black',
                        width:'100%',
                        height:'100%',
                        display:'flex',
                        alignItems:'center',
                        borderRadius:'20px',
                        justifyContent:'center',
                        color:'white'
                      }}>Add to Card</Box>
                    </Stack>
                </Stack>
              </Box>

              <Box sx={{
                margin:'20px 0'
              }}>
                <Accordion sx={{
                  margin:'20px 0',  
                  backgroundColor:'rgba(241,245,249,0.7)'
                }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Description</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                  margin:'20px 0',  
                  backgroundColor:'rgba(241,245,249,0.7)'
                }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Feature</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
          </Grid>

        </Grid>
    </Dialog>
  );
}
