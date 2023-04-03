import React from 'react'
import { socials } from '../../constants/social-media';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface SocialMediaProps {
  direction?: string | null;
  color?: string
}

import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'

const SocialMedia = ({ direction, color }: SocialMediaProps) => {
  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const secondSection = document.getElementById('event');
      if (secondSection && scrollPosition >= secondSection.offsetTop) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Stack sx={{
      position: 'fixed',
      top: '50%',
      visibility: showComponent ? 'visible' : 'hidden',
      display: {xs: 'none', md: 'flex'}
    }} height={'100%'} columnGap={2} color="blue " flexDirection={'column'} alignItems='flex-end' justifyContent='flex-start'>


      {/* <Button variant="contained" sx={{ backgroundColor: '#BDBDBD', borderRadius: '50%', width: '20px', height: '50px' }}><img src={linkedin} alt="" /></Button>
    <Button variant="contained" sx={{ backgroundColor: '#BDBDBD', borderRadius: '50%', width: '20px', height: '50px' }}><img src={linkedin} alt="" /></Button> */}
      {
        socials.map((social, key) => (
          <Button
            key={key}
            variant="contained"
            sx={{ backgroundColor: '#BDBDBD', borderRadius: '50%', width: '20px', height: '50px', my: 0.4, ml: 1 }}>
            <img style={{ width: '25px' }} src={social.icon} alt="" />
          </Button>
        ))


      }
      {/* {socials.map((social, key) => (
            <Tooltip sx={{backgroundColor: 'black', color: 'black'}}>
             
            </Tooltip>
        ))} */}
    </Stack>
  )
}

export default SocialMedia;