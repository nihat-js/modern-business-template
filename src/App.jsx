import { Route, Routes } from 'react-router-dom'
import './assets/css/style.scss'

import HomePage from './pages/Home'
import AboutPage from './pages/About'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
