import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
    return (
        <div className='footer'>
            <Box sx={{display:{lg: 'block',md:'block',xs:'none', sm: 'none'}}}>
                <Box sx={{ bgcolor: 'black', px: 2, py: 5, display: 'grid', justifyContent: 'center', }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8, bgcolor: "black", color: 'white' }} >
                    <Box >
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763992200/17466982242413_o1zwur.svg' height="100" width="100" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4,pt:5 }}>
                        <Typography variant='p'>Terms & Conditions</Typography>
                        <Typography variant='p'>Privacy Policy</Typography>
                        <Typography variant='p'>Contact Us</Typography>
                        <Typography variant='p'>List your events</Typography>
                    </Box>
                    <Box sx={{display:'grid',justifyContent:'center'}}>
                        <Box>
                        <img style={{borderRadius:4}} src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763988769/17628835501492_sp20h6.svg' height="100" width="100" />
                        </Box>
                        <Box>
                        <Typography variant='p'>Scan to download the app</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ borderTop: '2px solid grey',pt:2, mx: 4, display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Typography variant='p' sx={{ color: 'grey' }} align='left'>
                        By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.
                    </Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}} gap={2}>
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044007/9875b1e59bd4c4cc35068c9ff48962de1742906588_dtwgaq.png' alt='facebook' height='28' width='28' />
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044023/c14de0ff254f0cac2316900cbeb5ca4e1742906714_ias5qj.png' alt='instagram' height='28' width='28' />
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044042/21ebc1fe6df75df6159d00e9ab651d681742906748_fprs8v.png' alt='twitter' height='28' width='29' />
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044049/17544745843353_sujthi.svg' alt='twitter' height='26' width='38' />
                    </Box>
                </Box>


            </Box>
            </Box>
            <Box sx={{display:{lg: 'none',md:'none',xs:'block', sm: 'block'}}}>
                   <Box sx={{ bgcolor: 'black', px: 2, py: 5, display: 'grid', justifyContent: 'center', }}>
                <Box sx={{ display: 'grid', justifyContent: 'center', gap: 8, bgcolor: "black", color: 'white' }} >
                    <Box >
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763992200/17466982242413_o1zwur.svg' alt='logo' height="100" width="100" />
                    </Box>
                    <Box sx={{ display: 'grid', justifyContent: 'center', gap: 4,pt:5 }}>
                        <Typography variant='p'>Terms & Conditions</Typography>
                        <Typography variant='p'>Privacy Policy</Typography>
                        <Typography variant='p'>Contact Us</Typography>
                        <Typography variant='p'>List your events</Typography>
                    </Box>
                    <Box sx={{display:'grid',justifyContent:'center'}}>
                        <Box>
                        <img style={{borderRadius:4}} src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1763988769/17628835501492_sp20h6.svg'alt='logo' height="100" width="100" />
                        </Box>
                        <Box>
                        <Typography variant='p'>Scan to download the app</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ borderTop: '2px solid grey',pt:2, mx: 4, display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Typography variant='p' sx={{ color: 'grey',display:{sm:'none',xs:'none'} }} align='left'>
                        By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.
                    </Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}} gap={2}>
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044007/9875b1e59bd4c4cc35068c9ff48962de1742906588_dtwgaq.png' alt='facebook' height='28' width='28' />
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044023/c14de0ff254f0cac2316900cbeb5ca4e1742906714_ias5qj.png' alt='instagram' height='28' width='28' />
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044042/21ebc1fe6df75df6159d00e9ab651d681742906748_fprs8v.png' alt='twitter' height='28' width='29' />
                        <img src='https://res.cloudinary.com/dm2xtqaqy/image/upload/v1764044049/17544745843353_sujthi.svg' alt='twitter' height='26' width='38' />
                    </Box>
                </Box>


            </Box> 
            </Box>
            
        </div>
    )
}

export default Footer