// import 'dotenv/config'
import dotenv from 'dotenv';
dotenv.config({ override: true });

import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import todosRouter  from './src/api/todos.js'

const app = express()
const PORT = '3500' || process.env.PORT

const server = () => {
  try {
    app.listen(PORT, () => console.log(`app running on http://localhost:${PORT}`))
  } catch (error) {
    console.error(error);
  }
}

server()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/todos', todosRouter)
