import React from 'react'
import Wrapper from '../../layout/Wrapper';
import { Box } from '@mui/material';
import Card from '../../components/CustomCard';
import { Stack } from '@mui/material';

export const Projects = () => {
  return (
    <Box sx={{mx: 5}}>
        <h1>Projects</h1>
        <Stack>
          <Card img='' date="" description='' />
          <Card img='' date="" description='' />
          <Card img='' date="" description='' />
        </Stack>

    </Box>
  )
}

export default Wrapper(Projects, 'projects');