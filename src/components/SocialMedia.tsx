import React from 'react'
import { socials } from '../constants/social-media';

import Stack from '@mui/material/Stack';

const SocialMedia = () => {
  return (
    <Stack height={'100%'} columnGap={2} color="white" flexDirection="row" alignItems='flex-end' justifyContent='flex-start'>
        {socials.map((social, key) => (
            <a className='social-icon' key={key}>
                <img width="25px" src={social.icon} alt="" />
            </a>
        ))}
    </Stack>
  )
}

export default SocialMedia;