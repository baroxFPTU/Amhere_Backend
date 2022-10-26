import express from 'express'
import { MessageController } from '~/controllers/message.controller'

const router = express.Router()

router.post('/getmsg', MessageController.getAllMessage)
router.post('/addmsg', MessageController.addMessage)

export const ChatRoute = router
