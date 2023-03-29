import React from 'react';
import Wrapper from '../../layout/Wrapper';

import { Stack, Box } from '@mui/material';
import HorizontalScrollbar from '../HorizontalScroll';
import Section from '../Section';
import { getAllProjects } from '../../api/http-request';
import { useQuery } from '@tanstack/react-query';

import { Link } from 'react-router-dom';

import "./Projects.scss";

export const Projects = () => {
  
  const {data, isLoading} = useQuery(['projects-main'], () => {
    return getAllProjects().then((res) => {
      return res.data
    });
  })

  

  return (
    <Section>
        <h1>Projects</h1>
        <Box sx={{my: 4}}>
          <Link to="/work">
            <div className='link-secondary'>
                See All Projects
            </div>
          </Link>
        </Box>
        <Stack>
          
          {!isLoading && <HorizontalScrollbar works={data} />}
        </Stack>
    </Section>
  )
}

export default Wrapper(Projects, 'project');