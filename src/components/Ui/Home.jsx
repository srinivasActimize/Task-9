import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import  { useEffect } from 'react'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsDataActionInitiate } from '../redux/Action/getItemsAction';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

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
  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch]);

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

// const topEvents=districtDocs?.[districtId]?.top-events || [];
console.log("districtIwwwwwwwwd:", movies);
console.log("moviesss:", topEvents);
let mslides=5;
let eslides=4;
    window.addEventListener("resize", function() {
      const width=this.window.innerWidth
        if(width<321){
          mslides=2
          eslides=1
          return
        }
        else if(width<769){
          mslides=4
          eslides=2
          return
        }
        else{
          mslides=6
          eslides=4
        }
    });
    console.log(mslides)
  return (
    <div className='home-page'>
    <Container >
    
    <Box sx={{mt:8}}>
        <Typography variant='h5' align='left'>Movies of the week</Typography>
      <Box sx={{mt:2}}>
    <Swiper
        breakpoints={{
          0: {
          slidesPerView: 1,
          spaceBetween: 10,
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
        // slidesPerView={mslides}
        // spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {movies.map((movie,index)=>(
          <SwiperSlide onClick={()=>handleClick(movie.title)}>
      <Card sx={{ maxWidth: 345,borderRadius:2,mb:2 }}>
     
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
          spaceBetween: 10,
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

        modules={[FreeMode, Pagination]}
        className="mySwiper"
        
      >
        {events.map((event,index)=>(
          <SwiperSlide onClick={()=>handleEvent(event.title)}>
      <Card sx={{ maxWidth: 345,borderRadius:3,mb:2 }}>
     
      <CardMedia
        component="img"
        height="420"
        width="294"
        
        image={event.image}
        alt="Paella dish"
      />
      <CardContent sx={{height:150}}>
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
          spaceBetween: 10,
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

        modules={[FreeMode, Pagination]}
        className="mySwiper"
        
      >
        {topEvents.map((top,index)=>(
          <SwiperSlide>
      <Card sx={{ maxWidth: 345,borderRadius:3,mb:2 }}>
     
      <CardMedia
        component="img"
        height="420"
        width="294"
        
        image={top.image}
        alt="Paella dish"
      />
      <CardContent sx={{height:150}}>
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
          spaceBetween: 10,
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
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {artists.map((artist,index)=>(
          <SwiperSlide onClick={()=>handleArtist(artist.name)}>
          
      <img style={{borderRadius:'100%'}} src={artist.image} height="190" width="190"/>
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