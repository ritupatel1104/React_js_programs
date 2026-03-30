import React from 'react'
import ProductCard from './ui/ProductCard'
import Home from './Pages/Home'
import Product from './Pages/Product'
import { Route, Routes } from 'react-router-dom'
import NitecDashboard from './Pages/NitecDashboard'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Shop from './Pages/Shop'
import Collection from './Pages/Collection'
import ContactPage from './Pages/ContactPage'
import AboutUsPage from './Pages/AboutUs'
const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />} />
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop/:collection' element={<Shop />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/about' element={<AboutUsPage />}/>
      </Routes>   
    <Footer />
      
    {/* <NitecDashboard /> */}
      
    </>
  )
}

export default App
