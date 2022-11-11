import { ChatService } from '../services/chat.service'

let onlineUsers = []
let tempMessagesStorage = []

export function EventSocketHandler(io) {
  io.on('connection', (socket) => {
    socket.on('disconnect', (roleSlug) => {
      onlineUsers = onlineUsers.filter((user) => user.socket_id !== socket.id)
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
      socket.join(roomId)
      socket.room = roomId
    })

    socket.on('client-send-message', async (data) => {
      const createdMessage = await ChatService.addMessage(data)
      io.sockets.in(socket.room).emit('server-exchange-message', data)
    })

    socket.on('client-get-conversation-message', (roomId) => {
      const roomMessages = tempMessagesStorage.find((roomMessage) => roomMessage.id === roomId)
      socket.emit('server-send-conversation-message', roomMessages?.messages ?? [])
    })
  })
}
