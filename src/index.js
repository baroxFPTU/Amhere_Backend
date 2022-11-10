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

  let onlineUsers = []
  let tempMessagesStorage = []

  const io = new Server(server, {
    cors: {
      origin: env.SOCKET_CONNECTOR
    }
  })

  io.on('connection', (socket) => {
    socket.on('disconnect', (roleSlug) => {
      console.log(socket.id)
      onlineUsers = onlineUsers.filter((user) => user.socket_id !== socket.id)
      console.log('out ', onlineUsers)
    })

    socket.on('client-auth', (auth) => {
      socket.user = auth
      if (onlineUsers.findIndex((user) => user.uid === auth.uid) === -1) {
        onlineUsers.push({
          ...auth,
          socket_id: socket.id
        })

        const onlineListeners = onlineUsers.filter(
          (user) => user.role_data.slug === 'nguoi-lang-nghe'
        )
        const onlineTellers = onlineUsers.filter(
          (user) => user.role_data.slug === 'nguoi-ke-chuyen'
        )

        io.sockets.emit('server-update-online-listeners', onlineListeners)
        io.sockets.emit('server-update-online-tellers', onlineTellers)
      }
    })

    socket.on('client-join-room', (roomId) => {
      console.log({ roomId })
      socket.join(roomId)
      socket.room = roomId
    })

    socket.on('client-send-message', async (data) => {
      const createdMessage = await ChatService.addMessage(data)
      console.log({ createdMessage })
      if (socket.room) {
        io.sockets.in(socket.room).emit('server-exchange-message', createdMessage)
      }
    })

    socket.on('client-get-conversation-message', (roomId) => {
      console.log({ roomId })
      const roomMessages = tempMessagesStorage.find((roomMessage) => roomMessage.id === roomId)
      console.log({ roomMessages })
      socket.emit('server-send-conversation-message', roomMessages?.messages ?? [])
    })
  })
}
