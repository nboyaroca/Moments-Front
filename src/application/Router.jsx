import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/LoginPage'
import MomentFormPage from '../pages/MomentFormPage'
import MomentPage from '../pages/MomentPage'
import { AuthUtils } from '../services/localAuthService'


export default function Router() {

  const AuthRoute = ({ children }) => {
    if (AuthUtils.getAuthUser().token) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const ProtectedRoute = ({ children }) => {
    if (!AuthUtils.getAuthUser().token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />}/>

            <Route path="/moment/:id" element={<MomentPage/>}/>

            <Route path="/form" element={
              <ProtectedRoute>
                <MomentFormPage/>
              </ProtectedRoute>}
            />


            <Route path="/form/:id" element={
              <ProtectedRoute>
                <MomentFormPage/>
              </ProtectedRoute>}
            />
            
            <Route path="/login" element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>}
            />
            <Route path="/signup" element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>}
            />
        </Routes>
    </BrowserRouter>
  )
}
