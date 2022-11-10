import express from 'express'
import AuthRoute from './auth.route'
import ChatRoute from './chat.route'
import ConversationRoute from './conversation.route.js'
import RoleRoute from './role.route'
import UserRoute from './user.route'

const router = express.Router()

/**
 * Auth APIs
 */
router.use('/auth', AuthRoute)

/**
 * User APIs
 */
router.use('/users', UserRoute)

/**
 * Conversations APIs
 */
router.use('/conversations', ConversationRoute)

/**
 * Chat APIs
 */
router.use('/chat', ChatRoute)

/**
 * Role APIs
 */
router.use('/roles', RoleRoute)

/**
 * Root
 */
router.use('/', (req, res) => {
  res.send('<h1>Hello, welcome to AmHere APIs</h1>')
})

export const apiV1 = router
