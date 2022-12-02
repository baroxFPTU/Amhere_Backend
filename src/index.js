const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const { Server } = require('socket.io')

const { apiV1 } = require('./routers/v1/index.js')
const { connectDB } = require('./configs/db.js')
const { env } = require('./configs/environment.js')

const { EventSocketHandler } = require('./sockets/events.socket')

connectDB().then(() => {
  bootServer()
})

const bootServer = () => {
  const app = express()

  app.use(morgan('tiny'))
  app.use(express.json({ limit: '30mb', extended: 'false' }))
  app.use(express.urlencoded({ limit: '30mb', extended: 'true' }))

  app.use(
    cors({
      origin: '*'
    })
  )

  app.use(
    '/api',
    (req, res, next) => {
      res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
      next()
    },
    apiV1
  )

  const server = app.listen(env.PORT, env.HOST, () => {
    console.log(`Server running on: http://${env.HOST}:${env.PORT}`)
  })

  const io = new Server(server, {
    cors: {
      origin: env.SOCKET_CONNECTOR
    }
  })

  EventSocketHandler(io)
}
