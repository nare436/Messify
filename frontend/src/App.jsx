import { useState } from 'react'
import './App.css'
import AuthSystem from './page/login.jsx'
import MessMembersDirectory from './page/members.jsx'
function App() {
  return (
    <>
    <MessMembersDirectory></MessMembersDirectory>
    {/* <AuthSystem></AuthSystem> */}
    </>
  )
}

export default App
