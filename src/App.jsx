import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Home/>
    <Work/>
    <About/>
    <Contact/>
    <Footer/> 
    </>
  )
}

export default App
