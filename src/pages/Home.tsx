import React from 'react'
import Header from '../pages/Header/Header'
import Projects from '../components/Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
import Box from '@mui/material/Box';

import { getAllProjects } from '../api/http-request';
import { useQuery } from '@tanstack/react-query';


const Home = () => {
  // comment for this code below
  const {data, isLoading} = useQuery(['projects-main'], () => {
    return getAllProjects().then((res) => {
      return res.data
    });
  })

  console.log("Reloading");

  return (<>
      <Header/>
      <Box sx={{ml: {xs: 0, md: 10}}}>
        <About/>
        <Projects data={data} isLoading={isLoading} />
        <Contact/>
      </Box>
    </>
  )
}

export default Home