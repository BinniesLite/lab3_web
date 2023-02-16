import React from 'react'
import Section from '../../components/Section'
import Wrapper from '../../layout/Wrapper'

import Grid from '@mui/material/Grid';
import EventCard from '../../components/EventCard';

import { Events, events } from '../../constants/events';

const About = () => {
  return (
    <Section>
      <h1>Events</h1>
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