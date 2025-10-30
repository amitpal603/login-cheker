import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from './components/Pages/Sign'
import Login from './components/Pages/Login'
import About from './components/Pages/About'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Sign/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}/>
    </Routes>
    
    </>
  )
}

export default App
