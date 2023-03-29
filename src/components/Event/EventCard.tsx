import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { Events } from '../../constants/events';
import { Link } from 'react-router-dom';

interface EventCardProps {
    events: Events;
}

const EventCard = ({ events }: EventCardProps) => {
    const { year, eventsList } = events;
    return (
        <>
            <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {year}
                </Typography>
            </Grid>

            <Grid rowSpacing={3} rowGap={3} item xs={12} md={6}>
                {eventsList.map((event, key) => (
                    <Link key={key} to={`/events/${event.id}`}>
                        <Box sx={{ marginBottom: 8 }}>
                            <a style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }} href="" >
                                <Stack flexDirection="column">
                                    <p>{event.eventTitle}</p>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {event.eventDescription}
                                    </Typography>
                                </Stack>
                            </a>
                        </Box>
                    </Link>
                ))}
            </Grid>
        </>
    )
}

export default EventCard