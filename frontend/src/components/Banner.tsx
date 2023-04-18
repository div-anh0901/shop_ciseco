import { Box,  useTheme,Typography,Grid, Button } from "@mui/material"
import { useState ,useEffect} from "react";
import { green } from "@mui/material/colors";
import SwipeableViews from 'react-swipeable-views';
import banner from '../assets/hero.webp';
import banner1 from '../assets/hero2.webp'
import banner2 from '../assets/hero3.webp'
import SearchIcon from '@mui/icons-material/Search';
interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
 
    index: number;
    value: number;
  }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}

        sx={{background:"#00FFFF",height: "90vh",width:"100%"}}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </Typography>
    );
  }

  
export const Banner =()=>{
    const theme = useTheme();
    const [value ,setValue] = useState(0);
    var indexSlide =0;
    // useEffect(()=>{
    //     setInterval(()=>{
    //         indexSlide+=1;
    //         if(indexSlide===3){
    //             indexSlide = 0;
    //             setValue(0)
    //         }
    //         setValue(indexSlide)
    //     },3000)
       
    // },[indexSlide]);
    
  
    const handleChangeIndex = (index: number) => {
        setValue(index);
      };

    return(
        <Box
            sx={{
                
                width:"100%",
                position:'relative',
                height: "90vh"
            }}
        >
            <SwipeableViews
                axis={theme.direction === 'rtl' ?'x-reverse':'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}  dir={theme.direction}>
                    <Grid sx={{display:"flex",width:"100%",justifyContent:'space-between',height: "80vh",  alignItems:'center' }}>
                        <Grid>
                            <Typography sx={{marginBottom:'30px',fontSize:{md:'20px', xs: '15px'}}}>
                                In this season, find the best 🔥
                            </Typography>
                            <Typography sx={{marginBottom:'30px',fontSize: {xs:'25px',md: "3.75rem"}}} variant="h2">
                                Exclusive collection for everyone
                            </Typography>
                            <Button
                                sx={{background:'black',padding: {md: "20px", xs:"10px" },color:'white', borderRadius:'20px'}}
                                endIcon={<SearchIcon/>}
                            >
                                Explore now
                            </Button>
                        </Grid>
                        <img style={{width:"50%",height: "80vh"}} src={banner} />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid sx={{display:"flex",width:"100%",justifyContent:'space-between',height: "80vh",  alignItems:'center' }}>
                        <Grid>
                            <Typography sx={{marginBottom:'30px',fontSize:{md:'20px', xs: '15px'}}}>
                                In this season, find the best 🔥
                            </Typography>
                            <Typography sx={{marginBottom:'30px',fontSize: {xs:'25px',md: "3.75rem"}}} variant="h2" >
                                Exclusive collection for everyone
                            </Typography>
                            <Button
                                sx={{background:'black',padding: {md: "20px", xs:"10px" },color:'white', borderRadius:'20px'}}
                                endIcon={<SearchIcon/>}
                            >
                                Explore now
                            </Button>
                        </Grid>
                        <img style={{width:"50%",height: "80vh"}} src={banner1} />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}  dir={theme.direction}>
                    <Grid sx={{display:"flex",width:"100%",justifyContent:'space-between',height: "80vh",  alignItems:'center' }}>
                        <Grid>
                            <Typography sx={{marginBottom:'30px',fontSize:{md:'20px', xs: '15px'}}}>
                                In this season, find the best 🔥
                            </Typography>
                            <Typography sx={{marginBottom:'30px',fontSize: {xs:'25px',md: "3.75rem"}}} variant="h2">
                                Exclusive collection for everyone
                            </Typography>
                            <Button
                                sx={{background:'black',padding: {md: "20px", xs:"10px" } ,color:'white', borderRadius:'20px'}}
                                endIcon={<SearchIcon/>}
                            >
                                Explore now
                            </Button>
                        </Grid>
                        <img style={{width:"50%",height: "80vh"}} src={banner2} />
                    </Grid>
                </TabPanel>
            </SwipeableViews>
            <Box sx={{display:'flex'  , position:'absolute', bottom: 0, width: "100%",marginRight: "auto",marginLeft:"auto" }}>
                <Box sx={{margin: "0 auto"}}>
                    <Button sx={{width: "70px",  height: "1px" ,margin: "5px" , border: "1px solid #ccc", background:value === 0 ? 'black':""}}  onClick= {()=>setValue(0)}>
                    </Button>
                    <Button sx={{width: "70px",  height: "1px",margin: "5px", border: "1px solid #ccc", background:value === 1 ? 'black':""}} onClick= {()=>setValue(1)}>
                    </Button>
                    <Button sx={{width: "70px",  height: "1px",margin: "5px", border: "1px solid #ccc", background:value === 2 ? 'black':""}} onClick= {()=>setValue(2)}>
                    </Button>
                </Box>
            </Box>
            
            
        </Box>
    )
}