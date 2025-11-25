import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useEffect } from 'react'
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
const EventDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(temp => temp.getproductsdata);
  useEffect(() => {
    dispatch(getProductsDataActionInitiate())
  }, [dispatch])
  console.log(data, 'sssssss')
  const districtDocs = data.data;

  const districtId = Object.keys(districtDocs)[0];
  const events = districtDocs?.[districtId]?.events || [];
  console.log('eventss', events)
  const event = events.find((item) => item.title === id)
  console.log('hhh', event)
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }} gap={4}>
        <Box sx={{ width: 'auto', height: 'auto', }}>
          <img src={event.image} width='500' height='500' alt='pic' />
        </Box>
        
        <Box sx={{ display: 'grid', justifyContent: 'grid-start', border: '1px solid black', height: 'auto', maxHeight: 350, maxWidth: 500, width: 'aut0', p: 2 }} >
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}> <Typography variant='h4' align='left'>{event.title}</Typography></Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><LabelImportantIcon /><Typography variant='p' sx={{ fontSize: '14px', pl: 1 }}>{event.category}</Typography></Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><CalendarTodayIcon />  <Typography sx={{ fontSize: '14px', pl: 1 }} variant='p'>{event.date}</Typography></Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><LocationOnOutlinedIcon /><Typography sx={{ fontSize: '14px', pl: 1 }} variant='h6' align='left'>{event.location}</Typography></Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid grey', width: 400, height: 36, pt: 2 }} >
            <Box sx={{ display: 'grid', justifyContent: 'space-around', }}>
              <Typography variant='p'>Starts from</Typography>
              <Typography variant='h6'>{event.price}</Typography>
            </Box>
            <Button size='small' sx={{ bgcolor: 'black' }} variant='contained'>Book Tickets</Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{display:'grid',justifyContent:'center'}}>
          <Typography variant='p'sx={{fontWeight:'none'}} align='left' >About the event </Typography>
          <Typography variant='p' align='left'>{event.about}</Typography>
        </Box>
      </Box>


    </Container>
  )
}

export default EventDetails;