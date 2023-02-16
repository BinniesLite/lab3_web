import React, {lazy, Suspense} from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Footer from './pages/Footer/Footer';
import Contact from './pages/Contact/Contact';

import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.scss'

function App() {

  return (
    <div className=''>
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
