import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import  { useEffect } from 'react'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { FreeMode,Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDataActionInitiate } from '../redux/Action/getItemsAction';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
window.addEventListener('resize',function(){
})

const dispatch=useDispatch();

 const handleClick=(name)=>{
    navigate(`/movies/${name}`);
  }

  const handleEvent=(name)=>{
    navigate(`/events/${name}`);
  }
  const handleArtist=(name)=>{
    navigate(`/artist/${name}`)
  }
  // dispatching data in state
  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch]);

  // getting data from state
  const data = useSelector(temp => temp.getproductsdata);
console.log('dataaa',data)
const districtDocs = data.data;

if (!districtDocs) {
  return <p>Loading...</p>;
}

const districtId = Object.keys(districtDocs)[0];
const movies = districtDocs?.[districtId]?.movies || [];
const artists = districtDocs?.[districtId]?.artists || [];
const events = districtDocs?.[districtId]?.events || [];
const topEvents = districtDocs?.[districtId]?.["top-events"]||[];

  return (
    <div className='home-page'>
    <Container >
    <Box sx={{mt:{lg:8,md:8,sm:8,xs:12}}}>
        <Typography variant='h5' align='left'>Movies of the week</Typography>
      <Box sx={{mt:2}}>
        {/* movies section */}
    <Swiper
        breakpoints={{
          0: {
          slidesPerView: 1,
        },
        600:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
         900:{
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        }}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper"
      >
        {movies.map((movie)=>(
          <SwiperSlide onClick={()=>handleClick(movie.title)}>
      <Card sx={{ maxWidth: 345,borderRadius:4,mb:2,boxShadow:'none',border:'1px solid lightgrey' }}>
      <CardMedia
        component="img"
        height="256"
        width="190"
        image={movie.image}
        alt="Paella dish"
      />
      <CardContent sx={{height:45}}>
          <Typography sx={{ marginBottom: 2,fontWeight:'bold',fontFamily:'Be Vietnam Pro, san-seriff' }}>{movie.title}</Typography>
          <Typography>
           {movie.certificate} | {movie.language}
          </Typography>
        </CardContent>
    </Card>
    </SwiperSlide>
  ))}
      </Swiper>
    </Box>
    <Box sx={{mt:5,pt:2,pb:2}}>
    <Typography variant='h5' align='left'>India's top Events</Typography>
    <Swiper
      breakpoints={{
          0: {
          slidesPerView: 1,
          // spaceBetween: 10,
        },
        600:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
         900:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        }}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper"  
      >
        {events.map((event)=>(
          <SwiperSlide onClick={()=>handleEvent(event.title)}>
      <Card sx={{ maxWidth: 345,borderRadius:4,mb:2 ,boxShadow:'none',border:'1px solid lightgrey'}}>
      <CardMedia
        component="img"
        height="420"
        width="294"
        image={event.image}
        alt="Paella dish"
      />
      <CardContent sx={{height:90}}>
          <Typography sx={{ marginBottom: 2,fontWeight:'bold',fontFamily:'Be Vietnam Pro, san-seriff' }}>{event.title}</Typography>
          <Typography>
           {event.date} | {event.location}
          </Typography>
        </CardContent>
    </Card>
    </SwiperSlide>
  ))}
      </Swiper>
    </Box>
    <Box sx={{mt:5,pt:2,pb:2}}>
    <Typography variant='h5' align='left'>India's top Events</Typography>
    <Swiper
      breakpoints={{
          0: {
          slidesPerView: 1,
          // spaceBetween: 10,
        },
        600:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
         900:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        }}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper"
      >
        {topEvents.map((top)=>(
          <SwiperSlide>
      <Card sx={{ maxWidth: 345,borderRadius:4,mb:2,boxShadow:'none',border:'1px solid lightgrey' }}>
      <CardMedia
        component="img"
        height="420"
        width="294"
        image={top.image}
        alt="Paella dish"
      />
      <CardContent sx={{height:'80px'}}>
          <Typography sx={{ marginBottom: 2,fontWeight:'bold',fontFamily:'Be Vietnam Pro, san-seriff' }}>{top.name}</Typography>
          <Typography>
           {top.date} | {top.location}
          </Typography>
        </CardContent>
    </Card>
    </SwiperSlide>
  ))}
      </Swiper>
    </Box>
    <Box sx={{pb:4}}>
      <Swiper
      breakpoints={{
          0: {
          slidesPerView: 1,
          // spaceBetween: 10,
        },
        600:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
         900:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        }}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiper"
      >
        {artists.map((artist)=>(
          <SwiperSlide onClick={()=>handleArtist(artist.name)}>
      <img style={{borderRadius:'100%'}} alt='name' src={artist.image} height="190" width="190"/>
       <Typography variant='h6'> {artist.name}</Typography> 
    </SwiperSlide>
  ))}
      </Swiper>
    </Box>
    </Box>
    </Container>
    </div>
  )
}

export default Home;