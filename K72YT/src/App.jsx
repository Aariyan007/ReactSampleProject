import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/home.jsx'

// const Home = React.lazy(() => import('./pages/home.jsx'))
const Agents = React.lazy(() => import('./pages/agents.jsx'))
const Projects = React.lazy(() => import('./pages/projects.jsx'))

const App = () => {
  return (
    <div className=''>

      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/agents' element={<Agents/>}/>
        <Route path = '/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App