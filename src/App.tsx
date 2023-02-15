import Navbar from './components/Navbar/Navbar'; 
import Header from './components/Header/Header';  
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

import './App.scss'

function App() {

  return (
  <div className=''>
      <Navbar/>
      <Header/>
      <Projects />
      <About/>
      <Contact/>
    </div>
  )
}

export default App
