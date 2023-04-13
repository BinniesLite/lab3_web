import React from 'react'
import { Button, Stack } from '@mui/material';
import { socials } from '../../constants/social-media';

const SocialMediaVertical = () => {
  return (
    <Stack direction="row" >
        {socials.map((social, key) => (
            <Button key={key} sx={{ fontSize: 40, color: '#000000', ml: 1, mr: 1, my: 2, cursor: 'pointer' }} >
                <img src={social.icon} alt="" />
            </Button>

        ))}
    </Stack>
  )
}

export default SocialMediaVertical