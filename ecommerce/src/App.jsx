import React from 'react'
import ProductCard from './ui/ProductCard'
import Home from './Pages/Home'
import Product from './Pages/Product'
import { Route, Routes } from 'react-router-dom'
import NitecDashboard from './Pages/NitecDashboard'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Product />}/>
      </Routes>   
    <Footer />
      
    {/* <NitecDashboard /> */}
      
    </>
  )
}

export default App
