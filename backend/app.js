import 'dotenv/config'
import e from 'express'

const app = e()
const port = process.env.PORT

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: 'Why did the scarecrow win an award?',
      punchline: 'Because he was outstanding in his field.'
    },
  
    {
      id: 2,
      joke: 'Why did the tomato turn red?',
      punchline: 'Because it saw the salad dressing.'
    },
  
    {
      id: 3,
      joke: 'What do you call a fake noodle?',
      punchline: 'An impasta.'
    }
  ]
  res.json(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})