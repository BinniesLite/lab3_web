import React from 'react';
import Wrapper from '../../layout/Wrapper';

import { Stack } from '@mui/material';
import { works } from '../../constants/work';
import HorizontalScrollbar from '../HorizontalScroll';
import Section from '../Section';

import { getAllProjects } from '../../api/http-request';

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
        <Stack>
          <HorizontalScrollbar works={projects} />
        </Stack>
    </Section>
  )
}

export default Wrapper(Projects, 'project');