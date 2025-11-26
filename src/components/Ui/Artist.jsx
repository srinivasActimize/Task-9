import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsDataActionInitiate } from '../redux/Action/getItemsAction';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Artist = () => {
  const {id}=useParams();

  const dispatch=useDispatch();

  const d=useSelector(temp=>temp.getproductsdata);

  useEffect(()=>{
    dispatch(getProductsDataActionInitiate())
  },[dispatch])
  
const districtDocs = d.data;

const districtId = Object.keys(districtDocs)[0];
const artists = districtDocs?.[districtId]?.artists || [];
const artist=artists.find((item)=>item.name===id);
  console.log('datais',artists);
  return (
    <div style={{marginTop:'50px'}}>
      <Box sx={{display:{lg:'flex',sm:'grid',xs:'grid'},justifyContent:'center',alignItems:'center',mx:6,my:8}}>
     
         <Box
              component="img"
              src={artist.image}
              alt="Responsive Image"
              sx={{
                borderRadius:5,
                width: '100%',
                height: 'auto', // Maintain aspect ratio
                maxWidth: {
                  xs: '300px', // Max width for extra-small screens
                  sm: '200px', // Max width for small screens
                  md: '400px', // Max width for medium screens
                  lg: '450px', // Max width for large screens
                  xl: '600px', // Max width for extra-large screens
                },
                mr:2
              }}
            />
 
       <Box sx={{display:'grid',justifyContent:'center',width:{lg:'400',sm:'100',xs:'100',md:'200'},height:{lg:'192',sm:'50',xs:'50'}}} >
        <Typography variant='h5' sx={{fontWeight:'bold',fontSize:'20px',fontFamily:'be vietnam pro'}} align='left'>{artist.name}</Typography>
        <Typography variant='p' align='left' sx={{fontSize:'16px',fontFamily:'be vietnam pro'}}>{artist.about}</Typography>
      </Box>
    </Box>
    </div>
  )
}

export default Artist