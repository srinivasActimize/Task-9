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

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(temp => temp.getproductsdata);
  useEffect(() => {
    dispatch(getProductsDataActionInitiate())
  }, [dispatch])

  const districtDocs = data.data;

  const districtId = Object.keys(districtDocs)[0];
  const movies = districtDocs?.[districtId]?.movies || [];
  console.log('moviedetails', movies)
  const movie = movies.find((item) => item.title === id)
  console.log('hhh', movie)
  return (
    <div className='events-page'>
    <Container>
      <Box sx={{ display:{sm:'grid',xs:'grid',md:'flex',lg:'flex'}, justifyContent: 'center', pt: 8 }} gap={4}>
        <Box sx={{ width: 'auto', height: 'auto', }}>
          <img src={movie.image} width='250' height='330' alt='pic' />
        </Box>
        <Box sx={{ display: 'grid', justifyContent: 'grid-start', border: '1px solid grey',borderRadius:5, height: 272, width: 320, px:2,pt:2 }} >
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}> <Typography variant='h4'>Name: {movie.title}</Typography></Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><CardMembershipIcon /><b>Certificate :</b> <Typography sx={{ fontSize: '20px', pl: 1 }} variant='h6'>{movie.certificate}</Typography></Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><StarPurple500Icon /><b>Rating:</b>  <Typography sx={{ fontSize: '20px', pl: 1 }} variant='p'>{movie.rating}/5</Typography></Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><b>Language: </b><Typography variant='p' sx={{ fontSize: '20px', pl: 1 }}>{movie.language}</Typography></Box>
          <Box>
            <Button sx={{bgcolor:'#9784e1ff'}} size='small' variant='contained'>Book Tickets</Button>
          </Box>
        </Box>
      </Box>



    </Container>
    </div>
  )
}

export default MovieDetails;