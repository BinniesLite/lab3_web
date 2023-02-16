import React from 'react'
import Header from '../pages/Header/Header'
import Projects from './Projects/Projects'
import About from './About/About'

const Home = () => {
  return (<>
      <Header/>
      <Projects />
      <About/>
    </>
  )
}

export default Home