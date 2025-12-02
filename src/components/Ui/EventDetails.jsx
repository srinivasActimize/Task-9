import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDataActionInitiate } from '../redux/Action/getItemsAction';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

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
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  const handlePayment = async () => {
    
      const options = {
        key: "rzp_test_Rl6zFhLRzvwqro",  
        amount: 170*100,
        currency: 'INR',
        name: "Movie Ticket Booking",
        description: `Booking for ${event.title}`,
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
  return (
    <Container>
      <Box sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'grid' }, justifyContent: 'space-around', mt:{lg:8,md:6,xs:14,sm:8,}  }} gap={4}>
        <Grid Container spacing={2}>
          <Grid size={4} >
            {/* event image */}
            <Box
              component="img"
              src={event.image}
              alt="Responsive Image"
              sx={{
                borderRadius:5,
                width: '100%',
                height: 'auto', // Maintain aspect ratio
                maxWidth: {
                  xs: '300px',
                  sm: '200px', 
                  md: '400px', 
                  lg: '450px', // Max width for large screens
                  xl: '600px', // Max width for extra-large screens
                },
              }}
            />
          </Grid>
        </Grid>
        {/* event details */}
        <Box sx={{ display: { lg: 'block', md: 'block', xs: 'none', sm: 'none' } }}>
          <Box sx={{ display: 'grid', justifyContent: 'grid-start',bgcolor:'white', border: '1px solid lightgrey', borderRadius: 5, height: '200px', width: '300px', p: 2 }} >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}> <Typography sx={{fontFamily:'be vietnam pro',fontSize:'21px'}} variant='h4' align='left'>{event.title}</Typography></Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-5_wjdzgz.svg' width='24px' height='24px' alt='label'/>  <Typography variant='p' sx={{ fontSize: '14px', pl: 1 }}>{event.category}</Typography></Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-6_2_znigso.svg' width='24px' height='24px' alt='date'/>  <Typography sx={{ fontSize: '14px', pl: 1 }} variant='p'>{event.date}</Typography></Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-7_zfm7ps.svg' width='24px' height='24px' alt='loc'/><Typography sx={{ fontSize: '14px', pl: 1 }} variant='h6' align='left'>{event.location}</Typography></Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid grey', height: 36, pt: 1, mt: 1 }} >
              <Box sx={{ display: 'grid', justifyContent: 'space-around', }}>
                <Typography variant='p'>Starts from</Typography>
                <Typography variant='h6'><b>{event.price}</b></Typography>
              </Box>
              <Button onClick={handlePayment} size='small' sx={{fontFamily:'Bebas Neue', bgcolor: '#000000',fontWeight:'bold' }} variant='contained'>Book Tickets</Button>
            </Box>
          </Box>
        </Box>
        {/* for responsive design */}
        <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' }, }}>
          <Box sx={{ display: 'grid', justifyContent: 'grid-start',bgcolor:'white', border: '1px solid grey', borderRadius: 5, height: 'auto', width: '250px', p: 2 }} >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}> <Typography sx={{fontFamily:'be vietnam pro',fontSize:'21px'}} variant='h4' align='left'>{event.title}</Typography></Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-5_wjdzgz.svg' width='24px' height='24px' alt='label'/>  <Typography variant='p' sx={{ fontSize: '14px', pl: 1 }}>{event.category}</Typography></Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-6_2_znigso.svg' width='24px' height='24px' alt='date'/>  <Typography sx={{ fontSize: '14px', pl: 1 }} variant='p'>{event.date}</Typography></Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}><img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764584588/asset-svg-7_zfm7ps.svg' width='24px' height='24px' alt='loc'/><Typography sx={{ fontSize: '14px', pl: 1 }} variant='h6' align='left'>{event.location}</Typography></Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid grey', width: 'auto', height: 36, pt: 2 }} >
              <Box sx={{ display: 'grid', justifyContent: 'space-around', }}>
                <Typography variant='p'>Starts from</Typography>
                <Typography variant='h6'>{event.price}</Typography>
              </Box>
              <Button size='small' sx={{ bgcolor: '#9784e1ff' }} variant='contained'>Book Tickets</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { lg: 'flex',md:'flex', sm: 'flex',xs:'grid' }, justifyContent: 'space-around' }}>
        <Box>
          <Box sx={{ display: 'grid', justifyContent: {lg:'center',xs:'left'}, height: 'auto', width: { sm:'300px',xs:'280px',lg:'400px',md:'300px' }, my: 4,}}>
            <Typography variant='p' sx={{ fontWeight: 'bold' }} align='left' >About the event </Typography>
            <Typography variant='p' align='left' sx={{ width:'100%', fontSize: '16px', fontFamily: 'be vietnam pro san-serif' }}>{event.about}</Typography>
          </Box>
        </Box>
        <Box sx={{ width: { lg: '400px', md: '350px', sm: '250px', xs: '300px' },my:2 }}>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{ fontWeight: 'bold' }} component="span">Frequently asked Questions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ borderBottom: '1px solid grey' }}>
                <b>Is there an age restriction for the event?</b><br/>
                No, there are no age restrictions for visiting the aquarium.
              </Typography>
              <Typography sx={{ borderBottom: '1px solid grey' }}>
               <b> Can I get a refund if I can't attend the event?</b><br/>
                No, tickets once purchased cannot be refunded.
              </Typography>
              <Typography sx={{ borderBottom: '1px solid grey' }}>
               <b> Are there accommodations for individuals with disabilities?</b><br/>
                Yes, Aquarium Paradise is wheelchair accessible on the ground floor only. Wheelchairs are available at no extra cost upon request.
              </Typography>
              <Typography sx={{ borderBottom: '1px solid grey' }}>
               <b> Is there a time limit on how long I can stay?</b>  <br/>
                Yes, the maximum time for your visit is 1-2 hours.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"

            >
              <Typography sx={{ fontWeight: 'bold' }} component="span">Terms & Conditions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ borderBottom: '1px solid grey' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
              <Typography sx={{ borderBottom: '1px solid grey' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
              <Typography sx={{ borderBottom: '1px solid grey' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

    </Container>
  )
}

export default EventDetails;