import React, {lazy, Suspense} from 'react';
import Navbar from './components/Navbar/Navbar'; 
const Footer = lazy(() => import('./components/Footer/Footer'));
import Home from './pages/Home';
// lazy load
const Events = lazy(() => import('./pages/Events/Events'));
const EventDetail = lazy(() => import('./pages/Events/EventDetail'));
const Works = lazy(() => import('./pages/Works/Works'));
const WorkDetail = lazy(() => import('./pages/Works/WorkDetail'));
const Team = lazy(() => import('./pages/Team/Team'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
import Loading from './components/Loading/Loading';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


import './App.scss'

function App() {  
  const client = new QueryClient();

  return (
  <div className=''>
      <QueryClientProvider client={client}>
        <Loading>
          <Router>
          <Navbar/>
            <Routes>
              {/* use suspsense for this  */}
              <Route path="/" element={<Loading><Home/></Loading>} />
              <Route path="/contact" element={
                <Contact/>}/>
              <Route path="/team" element={<Suspense fallback={<></>}>
                  
                  <>
                  <Team/>
                  </>
                
                </Suspense>}
              />
              <Route path="/work" element={<Suspense fallback={<></>}> 
              <Loading>
              <Works/>
              
              </Loading>
              </Suspense>}/>
              <Route path="/work/:id" element={<Suspense fallback={<></>}> <WorkDetail/></Suspense>}/>
              <Route path="/events" element={<Suspense fallback={<></>}> <Events/></Suspense>}/>
              <Route path="/events/:id" element={<Suspense fallback={<></>}> <EventDetail/></Suspense>}/>
            </Routes>
          </Router>
          <Suspense fallback={<></>}>
            <Footer />
          </Suspense>
        </Loading>
      </QueryClientProvider>
    </div>
  )
}

export default App
