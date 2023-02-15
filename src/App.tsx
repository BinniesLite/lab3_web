import React, {lazy, Suspense} from 'react';

import Navbar from './components/Navbar/Navbar'; 
import Header from './pages/Header/Header';  
import About from './pages/About/About';
const Contact = lazy(() => import('./pages/Contact/Contact'));
import Projects from './pages/Projects/Projects';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss'

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Header/>
      <Projects />
      <About/>
      <Contact />
    </div>
  )
}

export default App
