import React from 'react'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Stack direction="row" sx={{background: 'var(--black-color)', color: 'var(--white-color)', p: 3, py: 4, }}>
        <Stack flexDirection="column" rowGap={3} >
        <h3>MahdiLab</h3>
        <Stack  flexDirection={'column'}>
            <h4>Featured</h4>
            <Stack color="white" flexDirection="column" rowGap="10px">
                <a className='link'>Vieo Summarization</a>
                <a className='link'>Text Visualization</a>

            </Stack>
        </Stack>
        <div>
        <p>© 2021 MahdiLab</p>
        </div>
    </Stack>
    <Stack>
    // Social Media component 
    
    </Stack>
    </Stack>
  )
}

export default Footer;