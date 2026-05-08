import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import UserTable from './components/UserTable'

function App() {

  return (
    <>
      <Navbar/>
      <HomePage/>
      <UserTable/>
    </>
  )
}
export default App
