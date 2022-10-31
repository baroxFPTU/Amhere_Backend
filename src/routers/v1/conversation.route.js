import express from 'express'
import {
  getConverstationOfMember,
  getConverstationOfListener,
  getChatConverstation,
  getChatConverstationForListener
} from '../../controllers/converstationController'
const ConversationRoute = express.Router()

// ConversationRoute.get("/member/:userid", getConverstationOfMember);
// ConversationRoute.get("/listener/:userid", getConverstationOfListener);
ConversationRoute.get('/listener', getChatConverstationForListener)
ConversationRoute.get('/', getChatConverstation)

export default ConversationRoute
