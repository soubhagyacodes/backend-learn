import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')

      .then(function (response) {
        setJokes(response.data)
      })

      .catch(function (error) {
        console.log(error);
      })

  }, [])

  return (
    <>
      <h1>JOKES : {jokes.length}</h1>

      <div>
        {
          jokes.map((joke) => {
            return (
              <div key={joke.id}>
                <h2>{joke.joke}</h2>
                <p><i>{joke.punchline}</i></p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
