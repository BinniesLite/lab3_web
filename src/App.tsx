import React, {lazy, Suspense} from 'react';
import Navbar from './components/Navbar/Navbar'; 
const Footer = lazy(() => import('./components/Footer/Footer'));
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Team from './pages/Team/Team';
import Works from './pages/Works/Works';

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
          <Route path="/team" element={<Team/>}/>
          <Route path="/work" element={<Works/>}/>
        </Routes>
      </Router>
    
      <Suspense fallback="">
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
