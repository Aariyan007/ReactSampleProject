import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/home.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Navbar from './components/navigation/Navbar.jsx'
import FullScreenNav from './components/navigation/FullScreenNav.jsx'
// const Home = React.lazy(() => import('./pages/home.jsx'))
const Agents = React.lazy(() => import('./pages/agents.jsx'))
const Projects = React.lazy(() => import('./pages/projects.jsx'))

const App = () => {
  return (
    <div className=''>
      <FullScreenNav />
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/projects' element={<Projects />} />
      </Routes> */}
    </div>
  )
}

export default App