import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Navbar from './componets/Navbar/Navbar.jsx'
import Footer from './componets/Footer/Footer.jsx'
import About from './componets/About/About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />

  </BrowserRouter>

)
