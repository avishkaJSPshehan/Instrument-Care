import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Hero from '../Components/Common/Hero-section'
import FeatureCards from '../Components/Common/Cart'
import Services from '../Components/Common/Service'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards/>
      <Services/>
    </>
  )
}
