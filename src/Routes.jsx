import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Project4 from'./pages/Project4'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Projects' element={<Projects />} />
        <Route path='/Projects/Project1' element={<Project1 />} />
        <Route path='/Projects/Project2' element={<Project2 />} />
        <Route path='/Projects/Project3' element={<Project3 />} />
        <Route path='/Projects/Project4' element={<Project4 />} />
      <Route path='/Skills' element={<Skills/> } />
    </Routes>
  )
}

export default AppRoutes