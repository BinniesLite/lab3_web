import React from 'react'

import { Stack, Divider, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import Section from '../../components/Section';
import WorkCard from '../../components/Works/WorkCard';

import workHeader from '../../assets/work.jpg';

import { getAllProjects } from '../../api/http-request';
import Typography from '@mui/material/Typography';

import { ScrollToTop } from '../../utils/scroll-top';

import Wrapper from '../../layout/Wrapper';
import Image from '../../components/Image';
import { Projects } from '../types/types';
const useStyles = makeStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
  },
});


// write interface for projects type



const Works = () => {
  const [projects, setProjects] = React.useState<Projects[]>([]);

  React.useEffect(() => {
    getAllProjects().then((res) => {
      setProjects(res.data);
    })
  }, [])


  return (
    <Stack sx={{ width: '100%', backgroundColor: '' }}>
      <ScrollToTop />
      <Section>
        <Stack flexDirection={{ md: 'row', xs: 'column' }} justifyContent="space-between">
          <Typography variant="h1" fontWeight="500">
            Projects
          </Typography>
          <Typography gutterBottom variant='h5' color="text.primary">
            The future is here, we're always strive to improve ourself and the world. <br /> We strive to make the best result
          </Typography>

        </Stack>
        <Box 
          sx={{ my: 4 }}>
            <Image style={{ maxWidth: '100%', height: 'auto' }} src={workHeader} alt="" />
          </Box>
        <Divider sx={{ borderBottomWidth: '2px', fontWeight: 'bold', height: 5, borderColor: 'black', my: 10 }} />
        <Stack columnGap={5} flexWrap="wrap" flexDirection="row">
          <>
            {projects.map((project, key) => (
              <WorkCard id={project.id} key={key} img={project.image} date={project.date} description={project.description} title={project.name} />
            ))}
          </>
        </Stack>

      </Section>
    </Stack>
  )
}

export default Works; 
