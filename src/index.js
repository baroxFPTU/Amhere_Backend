import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import { Server } from 'socket.io'

import MessageController from './controllers/message.controller'
import { apiV1 } from './routers/v1/index.js'
import { connectDB } from './configs/db.js'
import { env } from './configs/environment.js'
import { ChatModel } from './models/chat.model'
import { ChatService } from './services/chat.service'
import { EventSocketHandler } from './sockets/events.socket'

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
