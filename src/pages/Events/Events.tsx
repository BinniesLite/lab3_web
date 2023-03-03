import React from 'react'
import { Stack, Typography, Divider, Grid } from '@mui/material'
import Section from '../../components/Section'
const Events = () => {
  return (
    <Stack sx={{ width: '100%', bgColor: '#fff1d6' }}>
    <Section>
    <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h1" fontWeight="500">
                Events
            </Typography>
            <Typography  gutterBottom variant='h5' color="text.primary">
                Explore how our team explore technology and work for a better goal
            </Typography>
        </Stack>
        <Divider sx={{ borderBottomWidth: '3px', fontWeight: 'bold' }} />
        <Grid sx={{ mt: 6 }} container spacing={2}>
            <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" color="text.secondary" component="div">December 12 2023</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Stack justifyContent="flex-start" alignItems="flex-start">
                    <Typography sx={{ fontWeight: 'bold', fontFamily: "'Playfair Display', serif;" }} variant="h5" component="h2" >
                        About
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="body1" component="p" >
                       
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        <Stack my={8}>
           
        </Stack>


    </Section>
</Stack>
  )
}

export default Events