import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Navbar from './components/navigation/Navbar.jsx'
import FullScreenNav from './components/navigation/FullScreenNav.jsx'

const Agents = React.lazy(() => import('./pages/agents.jsx'))
const Projects = React.lazy(() => import('./pages/projects.jsx'))

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log('Menu clicked! Current state:', isMenuOpen);
    setIsMenuOpen(true);
    console.log('State should now be true');
  };

  console.log('App rendering, isMenuOpen:', isMenuOpen);

  return (
    <div className='bg-black min-h-screen overflow-x-hidden'>
      {!isMenuOpen && <Navbar onMenuClick={handleMenuClick} />}
      {isMenuOpen && <FullScreenNav onClose={() => setIsMenuOpen(false)} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App