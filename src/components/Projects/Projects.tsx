import React from 'react'
import Wrapper from '../../layout/Wrapper';
import { Box } from '@mui/material';

export const Projects = () => {
  return (
    <Box sx={{mx: 5}}>
        <h1>Projects</h1>
        <button className='button-secondary'>Learn more</button>
    </Box>
  )
}

export default Wrapper(Projects, 'projects');