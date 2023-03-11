import React from 'react';
import Wrapper from '../../layout/Wrapper';

import { Stack, Box } from '@mui/material';

import HorizontalScrollbar from '../HorizontalScroll';
import Section from '../Section';

import { getAllProjects } from '../../api/http-request';

import { Link } from 'react-router-dom';

import "./Projects.scss";

export const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    getAllProjects().then((res) => {
      setProjects(res.data);
    });
  }, []);

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
          <HorizontalScrollbar works={projects} />
        </Stack>
    </Section>
  )
}

export default Wrapper(Projects, 'project');