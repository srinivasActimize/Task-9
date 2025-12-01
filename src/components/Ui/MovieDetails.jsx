import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDataActionInitiate } from '../redux/Action/getItemsAction';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MovieDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const dataa = useSelector(temp => temp.getproductsdata);

  useEffect(() => {
    dispatch(getProductsDataActionInitiate());
  }, [dispatch]);

  
  
  const districtDocs = dataa.data;
  const districtId = Object.keys(districtDocs)[0];
  const movies = districtDocs?.[districtId]?.movies || [];
  const movie = movies.find((item) => item.title === id);
  const handlePayment = async () => {
    
      const options = {
        key: "rzp_test_Rl6zFhLRzvwqro",  
        amount: 170*100,
        currency: 'INR',
        name: "Movie Ticket Booking",
        description: `Booking for ${movie.title}`,
        // order_id: data.id,
        handler: function (response) {
          alert("Payment Successful!");
          console.log("Payment Response:", response);
        },
        prefill: {
          name: "Srinu",
          email: "srinu@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#8B5CF6",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
  }
 
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className='events-page'>
      <Container>
        <Box
          sx={{ display: { sm: 'grid', xs: 'grid', md: 'flex', lg: 'flex' }, justifyContent: 'center',my:{lg:5,xs:8,sm:8} }}
          gap={4}
        >
          {/* Movie Image */}
          <Box
            component="img"
            src={movie.image}
            alt="Responsive Image"
            sx={{
              borderRadius: 5,
              width: '100%',
              height: 'auto',
              
              maxWidth: { xs: '280px', sm: '200px', md: '300px', lg: '350px', xl: '400px' },
            }}
            
          />

          <Box
            sx={{
              display: 'grid',
              justifyContent: 'grid-start',
              border: '1px solid grey',
              borderRadius: 5,
              height: 272,
              width: { xs: '250px', lg: '350px' },
              px: 2,
              pt: 2,
              bgcolor:'white'
            }}
          >
            <Box><Typography sx={{fontFamily:'be vietnam pro'}} variant='h4' align='left'>Name: {movie.title}</Typography></Box>
            <Box sx={{display:'flex',justifyContent:'start'}}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-5_wjdzgz.svg' alt='cert' height='24px' width='24px' /> <b> Certificate :</b> <Typography sx={{ pl: 1 }}>{movie.certificate}</Typography></Box>
            <Box sx={{display:'flex',justifyContent:'start'}}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-6_2_znigso.svg'alt='rating' height='24px' width='24px' /> <b> Rating:</b> <Typography sx={{ pl: 1 }}>{movie.rating}/5</Typography></Box>
            <Box sx={{display:'flex',justifyContent:'start'}}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-7_zfm7ps.svg'alt='lang' height='24px' width='24px' /><b> Language: </b><Typography sx={{ pl: 1 }}>{movie.language}</Typography></Box>

            <Box sx={{display:'flex',justifyContent:'space-between',my:2}}>
              <Box sx={{m:0,maxHeight:'10px'}}>
                <Typography size='small' variant='p' sx={{fontSize:'12px'}}>start from</Typography>
                <Typography size='small' variant='h6' sx={{fontWeight:'bold'}}>1,999</Typography>
              </Box>
              <Button
                sx={{ bgcolor: '#000000' }}
                size='small'
                variant='contained'
                onClick={handlePayment}
              >
                Book Tickets
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default MovieDetails;
