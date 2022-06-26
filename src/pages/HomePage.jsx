import React from 'react'
import Moments from '../components/momentsList/Moments'
import Navbar from '../components/navbar/Navbar'



export default function HomePage() {
return (
  <>
  <Navbar filter='invert(3%) grey(50%) saturate/4500%) hue-rotate(15deg) brightness(80%) contrast (25%)' />
  <Moments />
  </>
)
  
}