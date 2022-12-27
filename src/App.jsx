import { Route, Routes } from 'react-router-dom'
import './assets/css/style.scss'

import HomePage from './pages/Home'
function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
