import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App
