import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from './components/Pages/Sign'
import Login from './components/Pages/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Sign/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
