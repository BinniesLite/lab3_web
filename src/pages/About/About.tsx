import React from 'react'
import Section from '../../components/Section'
import Wrapper from '../../layout/Wrapper'

import Grid from '@mui/material/Grid';
import EventCard from '../../components/EventCard';
import Box from '@mui/material/Box';

import { Events, events } from '../../constants/events';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Section>
      <h1>Events</h1>
      <Box sx={{my: 4}}>
          <Link to="/events">
            <div className='link-secondary'>
                See All Events
            </div>
          </Link>
        </Box>
      <Grid container rowSpacing={2}>
        {events.map((event: Events, key) => (
            <EventCard
              key={key}
              events={event}
            />))}
      </Grid>
    </Section>
  )
}

export default Wrapper(About, 'about');