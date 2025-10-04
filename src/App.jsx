import { useState } from 'react'
import Header from './component/Header'
import Example from './component/Example'
import Footer from './component/Footer'
import SideBar from './component/SideBar'
import SideHeader from './component/SideHeader'
import AppRoutes from './Routes/AppRoutes'
import ScrollToTop from './component/ScrollToTop'



function App() {
  

  return (
    <>
      <ScrollToTop/>
      <Header />
      <AppRoutes/>
      <Footer />
    </>
  )
}

export default App



