import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';

import Modal from '@mui/material/Modal';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius:5,
  boxShadow: 24,
  p: 4,
  display: 'grid',
  justifyContent: 'center',
  backgroundImage: `url(https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764239244/cff25f32c0fd4d4dadae03014b9c1bed1736642601_ip7dkf.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover", // Adjust as needed (e.g., 'contain', '100% 100%')
  backgroundPosition: "center",
  // width:'30%',
  gap: 3
};

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user,setUser]=useState();
  const [active, setActive] = useState('one');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    googleLogout();
    console.log('logged out')
  }
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setUser(jwtDecode(credentialResponse.credential))
    navigate('/');
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleButton = (value) => {
    setActive(value);
  }
  const navigate = useNavigate();

  React.useEffect(()=>{
    console.log('fd',user);
  },[user])
  const handleBack = () => {
    navigate('/');
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleOpen}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
      
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
       
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>

      <Box sx={{ flexGrow: 1, pt: 1, pb: 2 }}>
        <Box sx={{ display: { sm: 'none', lg: 'block', xs: 'none', md: 'block' } }}>
          <AppBar sx={{ color: 'black', bgcolor: 'white', boxShadow: '0 0px 8px 0 rgba(0, 0, 0, 0.2)' }} position="fixed">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ borderRight: "1px solid grey", pr: 2, justifyContent: 'center' }} >
                  <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763726020/brand-logo_rjf1ow.png' width='108' height='43' onClick={handleBack} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ pt: 2, color: 'blue', px: 1 }}>
                    <LocationOnOutlinedIcon />
                  </Box>
                  <Box>
                    <Typography align='left' variant='h6' sx={{ fontWeight: 'bold', fontSize: '16px' }} >Kakinada</Typography>
                    <Typography align='left' variant='p' sx={{ fontSize: '12px' }}>12th ward, Bhanugudi</Typography>
                  </Box>
                </Box>

                <Box sx={{ pt: 1, px: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                  {/* <ButtonGroup variant='text'> */}
                  <Button sx={{ bgcolor: active === 'one' ? '#EAE5FF' : 'transparent', color: 'rgb(35, 18, 104)', borderRadius: 20, fontSize: '12px', fontWeight: 'bold' }} size='medium' onClick={() => handleButton('one')}><Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>For you</Typography>  </Button>
                  <Button sx={{ bgcolor: active === 'two' ? 'rgb(249, 244, 220)' : 'transparent', color: 'rgb(35, 18, 104)', borderRadius: 20, }} size='medium' onClick={() => handleButton('two')}><Typography sx={{ fontSize: '12px', fontWeight: 'bold' }} >events</Typography>  </Button>
                  <Button sx={{ bgcolor: active === 'three' ? '#EAE5FF' : 'transparent', color: 'rgb(35, 18, 104)', borderRadius: 20, }} size='medium' onClick={() => handleButton('three')}><Typography sx={{ fontSize: '12px', fontWeight: 'bold' }} >movies</Typography>  </Button>
                  {/* </ButtonGroup> */}
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: 'center', justifyContent: 'center' }}>

                  <Search sx={{ border: "1px solid grey", borderRadius: 3, }}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      sx={{ width: '393px', height: '45px' }}
                      placeholder="Search for events, movies..."
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>

                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                     {user?.picture && <img src={user?.picture} width='40px'height='40px' style={{borderRadius:'100%'}} alt='abd'/>}
                    {!user?.picture && <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                      sx={{bgcolor:'grey'}}

                    >
                     
                      <AccountCircleOutlinedIcon  />
                    </IconButton>}
                  </Box>
                  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ display: { sm: 'block', md: 'none', xs: 'block', lg: 'none' } }}>
          <AppBar sx={{ color: 'black', bgcolor: 'white', boxShadow: '0 0px 8px 0 rgba(0, 0, 0, 0.2)' }} position="fixed">
            <Toolbar>
              <Box sx={{ display: { sm: 'flex', xs: 'grid', md: 'flex', lg: 'flex' }, justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ pt: 2, color: 'blue', px: 1 }}>
                    <LocationOnOutlinedIcon />
                  </Box>
                  <Box>
                    <Typography align='left' variant='h6' sx={{ fontWeight: 'bold' }}>Kakinada</Typography>
                    <Typography align='left' variant='p'>12th ward, Bhanugudi</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'center', justifyContent: 'center' }}>

                  <Search sx={{ border: "1px solid grey", borderRadius: 2, }}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      width="100%"
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>

                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      {/* <AccountCircle /> */}
                      <AccountCircleOutlinedIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

            </Toolbar>
          </AppBar>
        </Box>
        {renderMobileMenu}
        {renderMenu}

      </Box>

      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
        <Box sx={{display:'flex',justifyContent:'center'}}>
          <Box
            component="img"
            src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763992200/17466982242413_o1zwur.svg'
            alt="Responsive Image"
            sx={{
              width: '50%',
              height: 'auto', // Maintain aspect ratio
              maxWidth: {
                xs: '280px',
                sm: '200px',
                md: '300px',
                lg: '350px', // Max width for large screens
                xl: '400px', // Max width for extra-large screens
              },
            }}
            
          />
          </Box>
          <Box sx={{ display: 'grid', justifyContent: 'center' }} spacing={2} gap={1}>
            <Typography variant='p' sx={{ fontSize: {lg:'22px',sm:'16px',xs:'14px'}, fontWeight: 'bold' }} align='center'>Enter your Email Address</Typography>
            <Typography variant='p' sx={{ color: '#FFDEB9', fontSize: '14px' }} align='center'>If you don't have account yet , we'll create one for you</Typography>
          </Box>

          <Box sx={{ display: 'grid', justifyContent: 'center' }} gap={3}>
            <Box>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log('login failed')} />
            </Box>
            <Box>
              <Button sx={{ bgcolor: 'black', color: 'white', width: '100%' }}>Continue</Button>
            </Box>
            <Box >
              <Typography variant='p' sx={{ color: '#FFDEB9' }}>By continuing, you agree to our</Typography>
              <br />
              <a href='https://www.district.in/policies/terms-of-service' style={{ textDecoration: 'none',color:'#E49BA6' }}>Terms and Conditions </a>
              <a href='https://www.district.in/policies/privacy' style={{ textDecoration: 'none',color:'#E49BA6'  }}>Privacy Policy</a>

            </Box>
          </Box>
        </Box>
      </Modal>





    </>


  );
}