import React from 'react'

import SocialMedia from '../../components/SocialMedia';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';



const Footer = () => {
    return (
        <Grid 
            container 
            rowSpacing={2}
            sx={{ background: 'var(--black-color)', color: 'var(--white-color)', p: 3, py: 4, }}>
            <Grid xs={12}>
                <h3>MahdiLab</h3>
            </Grid>
            <Grid item xs={12} md={4}>
                <Stack flexDirection="column" rowGap={3} >
                  <Stack flexDirection={'column'}>
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
            </Grid>
            <Grid item xs={12} md={4}>
                <h4>Blog</h4>
            </Grid>
            <Grid item md={4} xs={12}>
                <SocialMedia />
            </Grid>

        </Grid>
    )
}

export default Footer;