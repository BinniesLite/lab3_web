
// create an interface for the events array of objects
export interface Events {
    year: string,
    eventsList: {
        eventTitle: string,
        eventDescription: string,
    }[]
}


export const events: Events[] = [
    {
        year: '2022',
        eventsList:  [
            {
                eventTitle: 'World leading technolgoy',
                eventDescription: 'Announcement of the world leading technology - July 2022',
            },
            {
                eventTitle: 'Video Accumulation an Neural Network',
                eventDescription: 'The world Neural Network content - May 2022',
            },
            {
                eventTitle: 'AI and ML Farris MIT',
                eventDescription: 'Harvard MIT Stanford UC Berkely - January 2022',
            }
        ]
    },
    {
        year: '2020',
        eventsList:  [
            {
                eventTitle: 'World leading technolgoy',
                eventDescription: 'Announcement of the world leading technology - July 2022',
            },
            {
                eventTitle: 'Video Accumulation an Neural Network',
                eventDescription: 'The world Neural Network content - May 2022',
            },
            {
                eventTitle: 'AI and ML Farris MIT',
                eventDescription: 'Harvard MIT Stanford UC Berkely - January 2022',
            }
        ]
    }
]


