import React from 'react'
import ProductBar from '../Components/ProductBar'
import Hero from '../Components/Home/Hero'
import DetailsBar from '../Components/Home/DetailsBar'
import CategoryBar from '../Components/Home/CategoryBar'
import Offer from '../Components/Home/Offer'
import DealCard from '../ui/DealCard'
import DealBar from '../Components/Home/DealBar'

const Home = () => {
  return (
   <>
    <Hero />
    <DetailsBar />
    <CategoryBar />
    <ProductBar />
    <Offer />
    <DealBar />
   
   </>
  )
}

export default Home
