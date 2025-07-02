import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { useSelector } from 'react-redux'
import PageWrapper from './components/PageWrapper'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'
import Resume from './components/Resume'

const App = () => {
  const location = useLocation();
  const { mode, themeClass } = useSelector((state) => state.theme);
  console.log({mode});
  return (
    <div className={`min-h-screen ${themeClass} bg-[var(--color-bg-primary)]`}>
      <div>
        <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<PageWrapper><Home /></PageWrapper>} />
              <Route path='/about' element={<PageWrapper><About /></PageWrapper>} />
              <Route path='/projects' element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path='/resume' element={<PageWrapper><Resume /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        <Footer />
        </div>
    </div>
  )
}

export default App