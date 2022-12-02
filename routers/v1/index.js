const express = require('express')
const AuthRoute = require('./auth.route')
const ChatRoute = require('./chat.route')
const ConversationRoute = require('./conversation.route.js')
const RoleRoute = require('./role.route')
const UserRoute = require('./user.route')

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

module.exports = {
  apiV1: router
}
