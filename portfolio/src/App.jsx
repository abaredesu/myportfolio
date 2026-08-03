import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Experience from './pages/Experience.jsx'
import Contacts from './pages/Contacts.jsx'
import About from './pages/About.jsx' // Import About page

function App() {
  return (
    <BrowserRouter>
      <RouteScroller />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
      </Routes>
    </BrowserRouter>
  )
}

function RouteScroller() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default App