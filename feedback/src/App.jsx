import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gradient-to-b from-black to-black h-screen w-screen">
      <Navbar/>
      <Feedback/>
      <Footer/>
      </div>
    </>
  )
}

export default App
