import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Productions from './pages/Productions/Productions.jsx'
import Media from './pages/Media/Media.jsx'
import './App.css'

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="app">
      <Navbar onContactClick={() => setPopupOpen(true)} />

      <main key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </main>

      {popupOpen && (
        <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <ContactForm variant="popup" onClose={() => setPopupOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
