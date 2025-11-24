import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box sx={{bgcolor:'black'}}>
        <Box sx={{display:'flex',justifyContent:'center',gap:8,bgcolor:"black",color:'white',height:100,px:2,py:20}} >
            <Box >
                <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763992200/17466982242413_o1zwur.svg' height="100" width="100"/>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',gap:4}}>
                <Typography variant='h6'>Terms & Conditions</Typography>
                <Typography variant='h6'>Privacy Policy</Typography>
                <Typography variant='h6'>Contact Us</Typography>
                <Typography variant='h6'>List your events</Typography>
            </Box>
            <Box>
                <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763988769/17628835501492_sp20h6.svg' height="200" width="200"/>          
                <Typography variant='h6'>Scan to download the app</Typography>
            </Box>
        </Box>
        
    </Box>
    </>
  )
}

export default Footer