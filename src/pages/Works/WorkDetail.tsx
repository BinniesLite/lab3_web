import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getProjectsDetail, getImagesForProject } from '../../api/http-request';

import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Section from '../../components/Section';

import HorizontalScrollbar from '../../components/HorizontalScroll';


interface ProjectDetail {
    id: number;
    name: string;
    description?: string;
    members: {
        id: number;
        name: string;
    }[];
}

interface Member {
    id?: number;
    name?: string;
}

const WorkDetail = () => {
    const [projectDetail, setProjectDetail] = React.useState<ProjectDetail | any>({});
    const [images, setImages] = React.useState([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getProjectsDetail(parseInt(id as string, 10)).then((res) => {
            setProjectDetail(res.data);
        })
    }, [])

    useEffect(() => {
        getImagesForProject(parseInt(id as string, 10)).then((res) => {
            setImages(res.data)
        })
    }, [])
    
    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 



    console.log(projectDetail);

    const {members} = projectDetail;

    return (
        <Stack sx={{ width: '100%', bgColor: '#fff1d6' }}>
            <Section>
                <h1>{projectDetail.name}</h1>
                <Typography  gutterBottom variant='body1' color="text.primary">
                    Author: {members && members.map((member: Member, key: any) => (
                        <span key={key}>{member.name} {",  "}</span>
                    ))}
                </Typography>
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
                                {projectDetail.description}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack my={8}>
                    <Typography sx={{mb: 2}} variant="h5">
                        Images
                    </Typography>
                    <Stack>
                        <HorizontalScrollbar works={images} />
                    </Stack>
                </Stack>


            </Section>
        </Stack>
    )
}

export default WorkDetail;