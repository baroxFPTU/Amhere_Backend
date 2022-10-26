import express from 'express';
import { getListenerById, addNewListener } from '../controllers/listenerController';

const listenerRouter = express.Router();

listenerRouter.get('/:listenerid', getListenerById);
listenerRouter.post('/', addNewListener);

export default listenerRouter;
