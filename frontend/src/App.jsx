import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthSystem from './page/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthSystem></AuthSystem>
    </>
  )
}

export default App
