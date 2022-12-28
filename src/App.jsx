import { Route, Routes } from 'react-router-dom'
import './assets/css/style.scss'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import PricingPage from './pages/Pricing'
function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/pricing' element={<PricingPage />} />
      </Routes>

      <Routes>
        <Route path='index.html/' element={<HomePage />} />
        <Route path='index.html/about' element={<AboutPage />} />
        <Route path='index.html/contact' element={<ContactPage />} />
        <Route path='index.html/pricing' element={<PricingPage />} />
      </Routes>

    </div>
  )
}

export default App
