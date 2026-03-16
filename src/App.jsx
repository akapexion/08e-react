import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sender from './props/Sender'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
              <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/props" element={<Sender/>}></Route>
              </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
