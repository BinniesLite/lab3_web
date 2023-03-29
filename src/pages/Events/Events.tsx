import React from 'react'
import { Stack, Typography, Divider, Grid } from '@mui/material'

import About from '../About/About'
import { Events as EventType , events } from '../../constants/events';
import EventCard from '../../components/Event/EventCard';
import { ScrollToTop } from '../../utils/scroll-top';
import Section from '../../components/Section';

const Events = () => {
    return (
    
        <Stack sx={{ width: '100%', bgColor: '#fff1d6' }}>
            <ScrollToTop />    
            <Section>
                <Stack flexDirection={{ md: 'row', xs: 'column' }} justifyContent="space-between">
                    <Typography variant="h1" fontWeight="500">
                        Events
                    </Typography>
                    <Typography gutterBottom variant='h5' color="text.primary">
                        Explore how our team explore technology and work for a better goal
                    </Typography>
                </Stack>
                <Divider sx={{ borderBottomWidth: '2px', fontWeight: 'bold', height: 5, borderColor: 'black' }} />

                <Grid sx={{mt: 10}} container rowSpacing={2}>
                    {events.map((event: EventType, key) => (
                        <EventCard
                            key={key}
                            events={event}
                        />))}
                </Grid>
                {/* <Grid sx={{ mt: 6 }} container spacing={2}>
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
                </Grid> */}
             


            </Section>
        </Stack>
    )
}

export default Events