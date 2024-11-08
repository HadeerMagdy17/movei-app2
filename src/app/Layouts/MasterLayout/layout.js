import Footer from '@/app/components/Footer/Footer'
import NavBar from '@/app/components/NavBar/NavBar'
import React from 'react'

export default function MasterLayout({children}) {
  return (
    <div>
       <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}
