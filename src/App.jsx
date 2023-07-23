/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Products from './component/Products/Products'
import PhoneBar from './component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl font-bold text-purple-700 mx-auto p-4'>Hello Tailwind</h1>
      <Products></Products>
      <PhoneBar></PhoneBar>
    </>
  )
}

export default App
