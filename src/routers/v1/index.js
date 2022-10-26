import express from 'express'
import { ChatRoute } from './chat.route'
import ConversationRouter from './conversation.route.js'
import UserRoute from './user.route'

const router = express.Router()

/**
 * User APIs
 */
router.use('/users', UserRoute)

/**
 * Conversations APIs
 */
router.use('/conversations', ConversationRouter)

/**
 * Chat APIs
 */
router.use('/chat', ChatRoute)

/**
 * Root
 */
router.use('/', (req, res) => {
  res.send('<h1>Hello, welcome to AmHere APIs</h1>')
})

export const apiV1 = router
