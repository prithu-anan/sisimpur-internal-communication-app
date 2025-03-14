import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './scenes/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
