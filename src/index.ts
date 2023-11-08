import express from 'express';

const app = express()
app.use(express.json())

const PORT = 3000;

app.get('/ping', (_, res) => {
  console.log('Someone pinged here!!!')
  res.send('Pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
