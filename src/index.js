import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import { Server } from 'socket.io'

import MessageController from './controllers/message.controller'
import { apiV1 } from './routers/v1/index.js'
import { connectDB } from './configs/db.js'
import { env } from './configs/environment.js'

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

  // app.get('*', (req, res) => {
  //   res.send('<h1>Hello, welcome to AmHere APIs</h1>')
  // })

  const server = app.listen(env.PORT, env.HOST, () => {
    console.log(`Server running on: http://${env.HOST}:${env.PORT}`)
  })

  const io = new Server(server)

  const onlineUsers = new Map()

  io.on('connection', (socket) => {
    socket.on('add-user', (userId) => {
      onlineUsers.set(userId, socket.id)
    })
    socket.on('send-msg', async (data) => {
      const sendToUserSocket = onlineUsers.get(data.receiver)

      console.log(data)

      await MessageController.addMessageFun(data)
      if (sendToUserSocket) {
        socket.to(sendToUserSocket).emit('msg-receive', data)
      }
    })
  })
}
