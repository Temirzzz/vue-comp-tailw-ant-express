import dotenv from 'dotenv';
dotenv.config({ override: true })

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import todosRouter  from './src/api/todosRouter.js'
import authRouter from './src/api/authRouter.js'

const app = express()
const PORT = process.env.PORT || 5000

const server = async () => {
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
app.use('/auth', authRouter)
