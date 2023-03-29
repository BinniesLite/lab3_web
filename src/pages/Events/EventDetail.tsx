import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';


import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Section from '../../components/Section';
import SpeakerStack from '../../components/Event/SpeakerCard';
import OrganizerCard from '../../components/Event/OrganizerCard';
import { events, Events } from '../../constants/events';
import TableCustom from '../../components/table/TableCustom';

interface ProjectDetail {
    id: number;
    name: string;
    description?: string;
    members: {
        id: number;
        name: string;
    }[];
}



const EventDetail = () => {
    const [eventDetail, setEventDetail] = React.useState<ProjectDetail | any>({});
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        for (let i = 0; i < events.length; i++) {
            if (events[i].year === '2023') {
                console.log(events[i]);

                for (let j = 0; j < events[i].eventsList.length; j++) {
                    if (events[i].eventsList[j].id === Number(id)) {
                        setEventDetail(events[i].eventsList[j]);
                    }
                }

            }
        }
    }, [id]);

    const { eventTablePrivate, eventTableOpen } = eventDetail;


    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Stack sx={{ width: '100%', bgColor: '#fff1d6' }}>
            <Section>
                <h1>{eventDetail.eventTitle}</h1>

                <Divider sx={{ borderBottomWidth: '3px', fontWeight: 'bold' }} />
                {/* Create a simple blog like post which list out all the information in the events object */}
                <Stack flexDirection="column" my={5}>
                    <>  <Typography variant="subtitle1"> Date: {eventDetail.eventDate}</Typography></>
                    <>  <Typography variant="subtitle1"> Location: {eventDetail.eventLocation}</Typography></>
                

                </Stack>

                <Divider sx={{ borderBottomWidth: '3px', fontWeight: 'bold', my: 5 }} />
                <Stack flexDirection="column" alignContent="center" width="100%" my={8}>
                    <Typography sx={{ my: 5, fontWeight: 'bold' }} variant="h4"> Workshop Chair </Typography>
                    <Stack width="100%" alignContent="center" justifyContent="center">
                        {eventDetail.eventOrganizer?.map((organizer: any, index: number) => (
                            <OrganizerCard key={index} avatarSrc={organizer.organizerImg} name={organizer.organizerName} title={organizer.organizerTitle} />
                        ))}
                        
                    </Stack>

                </Stack>

                <Divider sx={{ borderBottomWidth: '3px', fontWeight: 'bold', my: 5 }} />
                <Stack flexDirection="column" alignContent="center" width="100%" my={8}>
                    <Typography sx={{ my: 5, fontWeight: 'bold' }} variant="h4">Speaker</Typography>
                    <Stack width="100%" alignContent="center" justifyContent="center">
                        {eventDetail.eventSpeaker?.map((speaker: any, index: number) => (
                            <SpeakerStack key={index} speaker={speaker.name} speakerTitle={speaker.speakerTitle} />
                        ))}
                    </Stack>
                </Stack>


                <Divider sx={{ borderBottomWidth: '3px', fontWeight: 'bold', mt: 20 }} />
                <Stack mt={20}>
                    <Typography sx={{ my: 5, fontWeight: 'bold' }} variant="h4">Schedule</Typography>
                    <Stack> 
                        <Typography color="text.secondary" variant="h6">
                            Closed Event
                        </Typography>
                        <TableCustom eventTable={eventTablePrivate} />
                    </Stack>
                    <Stack>
                        <Typography color="text.secondary" variant="h6">
                            Open Event
                        </Typography>
                        <TableCustom eventTable={eventTableOpen} />
                    </Stack>
                </Stack>
            </Section>
        </Stack>
    )
}

export default EventDetail;