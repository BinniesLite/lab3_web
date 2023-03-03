import React from 'react'
import Header from '../pages/Header/Header'
import Projects from '../components/Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'

const Home = () => {
  return (<>
      <Header/>
      <Projects />
      <About/>
      <Contact/>
    </>
  )
}

export default Home