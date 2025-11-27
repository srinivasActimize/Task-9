import styled from '@emotion/styled';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import React from 'react'

import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDataActionInitiate } from '../redux/Action/getItemsAction';
import Typography from '@mui/material/Typography';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import Button from '@mui/material/Button';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

const Payment = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box>
          <Box sx={{ display: { lg: 'block', md: 'block', xs: 'none', sm: 'none' } }}>
            <Box sx={{ display: 'grid', justifyContent: 'grid-start', border: '1px solid grey', borderRadius: 5, height: '300px', width: '400px', p: 2 }} >
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}> <Typography variant='h4' align='left'>BCC</Typography></Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><LabelImportantIcon fontSize='20px' /><Typography variant='p' sx={{ fontSize: '14px', pl: 1 }}>dfhfd</Typography></Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><CalendarTodayIcon fontSize='20px' />  <Typography sx={{ fontSize: '14px', pl: 1 }} variant='p'>22nd Oct 7pm</Typography></Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><LocationOnOutlinedIcon fontSize='20px' /><Typography sx={{ fontSize: '14px', pl: 1 }} variant='h6' align='left'>Kakinada</Typography></Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid grey', width: 400, height: 36, pt: 1, mt: 1 }} >
                <Box sx={{ display: 'grid', justifyContent: 'space-around', }}>
                  <Typography variant='p'>Starts from</Typography>
                  <Typography variant='h6'>9,999</Typography>
                </Box>
                <Button size='small' sx={{ bgcolor: '#9784e1ff' }} variant='contained'>Book Tickets</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
            <Box sx={{ display: 'grid', justifyContent: 'grid-start', border: '1px solid grey', borderRadius: 5, height: 'auto', width: '250px', p: 2 }} >
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}> <Typography variant='h4' align='left'>dfrgthyjg</Typography></Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><LabelImportantIcon /><Typography variant='p' sx={{ fontSize: '14px', pl: 1 }}>sdfgh</Typography></Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><CalendarTodayIcon />  <Typography sx={{ fontSize: '14px', pl: 1 }} variant='p'>30th december </Typography></Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><LocationOnOutlinedIcon /><Typography sx={{ fontSize: '14px', pl: 1 }} variant='h6' align='left'>Goa</Typography></Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid grey', width: 'auto', height: 36, pt: 2 }} >
                <Box sx={{ display: 'grid', justifyContent: 'space-around', }}>
                  <Typography variant='p'>Starts from</Typography>
                  <Typography variant='h6'>2,9999</Typography>
                </Box>
                <Button size='small' sx={{ bgcolor: '#9784e1ff' }} variant='contained'>Book Tickets</Button>
              </Box>
            </Box>
          </Box>
    </Box>
  )
}

export default Payment