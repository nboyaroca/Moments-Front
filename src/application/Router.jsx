import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />}/>
        </Routes>
    </BrowserRouter>
  )
}
