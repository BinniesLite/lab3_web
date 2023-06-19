import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
const Footer = lazy(() => import('./components/Footer/Footer'));
import Home from './pages/Home';
// lazy load
const Events = lazy(() => import('./pages/Events/Events'));
const EventDetail = lazy(() => import('./pages/Events/EventDetail'));
const Works = lazy(() => import('./pages/Works/Works'));
const WorkDetail = lazy(() => import('./pages/Works/WorkDetail'));
import Team from './pages/Team/Team'

import Loading from './components/Loading/Loading';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import SocialMedia from './components/SocialMedia/SocialMedia';

import './App.scss'

function App() {
  const client = new QueryClient();

  return (
    <div className=''>
      <QueryClientProvider client={client}>
        <SocialMedia />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Loading><Home /></Loading>} />

            <Route path="/team" element={
              <>
                <Team />
              </>
            }
            />
            <Route path="/work" element={<Suspense fallback={<></>}>
              <Loading>
                <Works />
              </Loading>
            </Suspense>} />
            <Route path="/work/:id" element={<Suspense fallback={<></>}> <WorkDetail /></Suspense>} />
            <Route path="/events" element={<Suspense fallback={<></>}> <Events /></Suspense>} />
            <Route path="/events/:id" element={<Suspense fallback={<></>}> <EventDetail /></Suspense>} />
          </Routes>
        </Router>
        <Footer />


      </QueryClientProvider>
    </div>
  )
}

export default App
