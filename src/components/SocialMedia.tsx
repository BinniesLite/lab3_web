import React from 'react'
import { socials } from '../constants/social-media';

import Stack from '@mui/material/Stack';

interface SocialMediaProps {
    direction?: string | null;
    color?: string
}

const SocialMedia = ({direction, color}: SocialMediaProps) => {
  return (
    <Stack height={'100%'} columnGap={2} color="black" flexDirection={'row'} alignItems='flex-end' justifyContent='flex-start'>
        {socials.map((social, key) => (
            <a className='social-icon' key={key}>
                <img width="25px" src={social.icon} alt="" />
            </a>
        ))}
    </Stack>
  )
}

export default SocialMedia;