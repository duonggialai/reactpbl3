import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Routers'

function App() {
  
 

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
