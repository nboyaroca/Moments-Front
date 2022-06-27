import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import MomentPage from '../pages/MomentPage'
import NewMoment from '../pages/NewMoment'

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/moment/:id" element={<MomentPage/>}/>
            <Route path="/newmoment" element={<NewMoment/>}/>
        </Routes>
    </BrowserRouter>
  )
}
