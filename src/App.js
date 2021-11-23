import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  document.body.style.background = "#9053c7";
  document.body.style.background = "-webkit-linear-gradient(-135deg, #c850c0, #4158d0)";
  document.body.style.background = "-o-linear-gradient(-135deg, #c850c0, #4158d0)";
  document.body.style.background = "-moz-linear-gradient(-135deg, #c850c0, #4158d0)";
  document.body.style.background = "linear-gradient(-135deg, #c850c0, #4158d0)";
  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}
