import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthSystem from './page/login.jsx'
import MessMembersDirectory from './page/members.jsx'
import NotificationsPage from './page/notificationPage.jsx'
import FeedbackForm from './page/Feedback.jsx'
import Navbar from './page/nav.jsx'
import WeeklyMenu from './page/menu.jsx'
import HomePage from './page/Home.jsx'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Routes>
        <Route path="/members" element={<MessMembersDirectory/>} />
        <Route path="/login" element={<AuthSystem/>} />
        <Route path="/notification" element={<NotificationsPage/>} />
        <Route path="/feedback" element={<FeedbackForm/>} />
        <Route path="/menu" element={<WeeklyMenu/>} />
      </Routes>
    </div>
    
  )
}
export default App
