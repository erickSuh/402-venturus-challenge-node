import express from 'express'
// import morgan from 'morgan'
// Create a new express app instance
const app: express.Application = express()

// app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('App is listening on port 3000!')
})
