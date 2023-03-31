import React from 'react'

import { Stack, Divider, Box } from '@mui/material';

import Section from '../../components/Section';
import WorkCard from '../../components/Works/WorkCard';
import workHeader from '../../assets/work.jpg';

import { getAllProjects } from '../../api/http-request';
import Typography from '@mui/material/Typography';
import { ScrollToTop } from '../../utils/scroll-top';

import Image from '../../components/Image';
import { Projects } from '../types/types';

import { useQuery } from '@tanstack/react-query';


// write interface for projects type



const Works = () => {
  const [projects, setProjects] = React.useState<Projects[]>([]);
  const { data, isLoading, error } = useQuery(['projects-main'], () => {
    return getAllProjects().then((res) => {
      return res.data
    })
  },
    {
      cacheTime: Infinity
    }
  )



  if (error) {
    console.log(error);
  }






  return (
    <Stack sx={{ width: '100%', backgroundColor: '' }}>
      <ScrollToTop />
      <Section>
        <Stack flexDirection={{ md: 'row', xs: 'column' }} rowGap={3} justifyContent="space-between">
          <Typography variant='h2' fontWeight="500">
            Projects
          </Typography>
          <Typography gutterBottom variant='h5' color="text.primary">
            The future is here, we're always strive to improve ourself and the world. <br /> We strive to make the best result
          </Typography>

        </Stack>
        <Box
          sx={{ my: 4, display: { xs: 'none', md: 'block' } }}>
          <Image style={{ maxWidth: '100%', height: 'auto' }} src={workHeader} alt="" />
        </Box>
        
        <Divider sx={{ borderBottomWidth: '2px', fontWeight: 'bold', height: 5, borderColor: 'black', my: 10 }} />
          <Typography variant="h2">"The era of artificial intelligence is upon us, and we're either going to be part of the problem or part of the solution." - Kai-Fu Lee
          </Typography>
        
        <Divider sx={{ borderBottomWidth: '2px', fontWeight: 'bold', height: 5, borderColor: 'black', my: 10 }} />

        <Stack columnGap={5} flexWrap="wrap" flexDirection="row">
          {!isLoading &&
            <>
              {data.map((project: any, key: any) => (
                <WorkCard id={project.id} key={key} img={project.image} date={project.date} description={project.description} title={project.name} />
              ))}
            </>
          }
        </Stack>

      </Section>
    </Stack>
  )
}

export default Works; 
