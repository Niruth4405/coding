import { useState } from 'react'
import './App.css'
import Jumbo from './components/Jumbo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jumbo/>
    </>
  )
}

export default App
