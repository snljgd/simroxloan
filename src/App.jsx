import { useState } from 'react'
import Header from './component/Header'
import Example from './component/Example'
import Footer from './component/Footer'
import SideBar from './component/SideBar'
import SideHeader from './component/SideHeader'
import AppRoutes from './Routes/AppRoutes'



function App() {
  

  return (
    <>
      <Header />
      <AppRoutes/>
      <Footer />
    </>
  )
}

export default App



