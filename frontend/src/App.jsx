import './App.css'
import { useState } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>JOKES : {jokes.length}</h1>
    </>
  )
}

export default App
