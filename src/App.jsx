import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import AppRoutes from './Routes/AppRoutes'
import ScrollToTop from './component/ScrollToTop'




function App() {


  return (
    <>
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App



