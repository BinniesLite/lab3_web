import React, {lazy, Suspense} from 'react';

import Navbar from './components/Navbar/Navbar'; 
import Header from './pages/Header/Header';  
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
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
      <Footer />
    </div>
  )
}

export default App
