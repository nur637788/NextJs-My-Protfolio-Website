import React from 'react'
import Home from '../home/page'
import About from '../components/About'
import Projects from '../components/Projects'
import ContactPage from '../contact/page'

function GetStart() {
  return (
    <div className='space-y-10'>
      <Home />
      <About />
      <Projects />
      <ContactPage />     

      <a className='fixed bottom-2 right-2 z-50 text-2xl' href="getStart">⬆️</a>
    </div>
  )
}

export default GetStart
