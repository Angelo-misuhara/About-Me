import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './Routes'

function App() {
  return (
    <>
      <div>
        <Router>
          <AppRoutes/>
        </Router>
      </div>
    </>
  )
}

export default App
