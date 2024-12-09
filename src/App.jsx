import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import React from 'react';
import Hero from './components/Hero';
import { Sales } from './components/Sales';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sales></Sales>
    </>
  )
}

export default App
