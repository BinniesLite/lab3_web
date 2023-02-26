import Wrapper from '../../layout/Wrapper';

import { Stack } from '@mui/material';
import { works } from '../../constants/work';
import HorizontalScrollbar from '../HorizontalScroll';
import Section from '../Section';

import "./Projects.scss";

export const Projects = () => {
  return (
    <Section>
        <h1>Projects</h1>
        <Stack>
          <HorizontalScrollbar works={works} />
        </Stack>
        
    </Section>
  )
}

export default Wrapper(Projects, 'project');