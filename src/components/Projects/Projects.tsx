import React from 'react';
import Wrapper from '../../layout/Wrapper';

import { Stack, Box } from '@mui/material';
import HorizontalScrollbar from '../HorizontalScroll';
import Section from '../../layout/Section';
import { Link } from 'react-router-dom';
import "./Projects.scss";

interface ProjectsProps {
  data?: any;
  isLoading?: boolean;
}

const Projects = ({data, isLoading}: ProjectsProps) => {
  
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

export default Wrapper(Projects, 'research');