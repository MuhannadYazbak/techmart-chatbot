import { Router } from 'express'
import { getReply } from '../logic/ruleEngine'

const router = Router()

router.post('/', (req, res) => {
  const message = req.body.message
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid message format' })
  }

  const reply = getReply(message)
  res.json({ reply })
})

export default router