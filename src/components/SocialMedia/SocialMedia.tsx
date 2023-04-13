import React from 'react';
import { socials } from '../../constants/social-media';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface SocialMediaProps {
  direction?: string | null;
  color?: string;
}

const SocialMedia = ({ direction, color }: SocialMediaProps) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const secondSection = document.getElementById('event');
      if (secondSection && scrollPosition >= secondSection.offsetTop - 300) {
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
    <Stack
      sx={{
        position: 'fixed',
        top: '22%',
        zIndex: 9998,
        visibility: showComponent ? 'visible' : 'hidden',
        display: { xs: 'none', md: 'flex' },
      }}
      height={'100%'}
      rowGap={2}
      flexDirection={'column'}
      alignItems='flex-end'
      justifyContent='flex-start'
    >
      {socials.map((social, key) => (
        <Button
        key={key}
        variant="contained"
        sx={{
          backgroundColor: 'transparent',
          borderRadius: '60%',
          my: 0.4,
          ml: 4,
        
          '&:hover': {
            backgroundColor: '#AAAAAA',
          },
        }}
      >
        <img style={{width: '25px', height: '40px'}} src={social.icon} alt="" />
      </Button>
      ))}
    </Stack>
  );
};

export default SocialMedia;