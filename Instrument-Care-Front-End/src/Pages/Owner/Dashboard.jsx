import React from 'react'
import Navbar from '../../Components/owner/Navbar'
import Footer from '../../Components/Common/Footer'
import TechniciansCard from '../../Components/owner/TechniciansCard'
import SearchBar from '../../Components/owner/SearchBar'


export default function User_Dashboard() {
  return (
    <>
      <Navbar />
        <SearchBar />
        <TechniciansCard/>
      <Footer />
    </>
  )
}