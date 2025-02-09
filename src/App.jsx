import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import ContactMe from './components/ContactMe.jsx'
import './App.css'
import { useEffect } from 'react'

function App() {

  return (
    <>
      <div className="page" id="mainPage">
        <Navbar></Navbar>
        <Intro></Intro>
      </div>
      <div className="page" id='projects' style={{ backgroundColor: "#1c1b1a" }}>asdsda</div>
      <div className="page" id='contactMe'>
        <ContactMe></ContactMe>
      </div >
    </>
  )
}

export default App
