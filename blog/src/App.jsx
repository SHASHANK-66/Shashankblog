import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App