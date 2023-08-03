import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Skills from './pages/Skills'
import Project1 from './pages/Project1'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Projects' element={<Project1 />} />
      <Route path='/Skills' element={<Skills/> } />
    </Routes>
  )
}

export default AppRoutes