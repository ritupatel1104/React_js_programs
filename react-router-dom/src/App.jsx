import React from 'react'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import Footer from './Layout/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <>

      <NavBar />
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path='/product/collection' element={<Collection />} />

          <Route path="*" element={<NotFound />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
