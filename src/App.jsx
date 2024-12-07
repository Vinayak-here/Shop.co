import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import React from 'react';
import { Sidebar } from 'lucide-react';
import Hero from './components/Hero';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  )
}

export default App
