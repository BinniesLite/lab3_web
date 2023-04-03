import React from 'react'
import Header from '../pages/Header/Header'
import Projects from '../components/Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
import Box from '@mui/material/Box';

const Home = () => {
  

  return (<>
      <Header/>
      <Box sx={{ml: {xs: 0, md: 10}}}>
        <About/>
        <Projects />
        <Contact/>
      </Box>
    </>
  )
}

export default Home