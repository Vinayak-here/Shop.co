import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import React from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
    </>
  )
}

export default App
