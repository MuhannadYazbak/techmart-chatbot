import express from 'express'
import cors from 'cors'
import chatRoutes from './routes/chat'

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET'],
  credentials: true
}))
app.use(express.json())

app.use('/chat', chatRoutes)

app.listen(3001, () => console.log('Chatbot is running at http://localhost:3001'))