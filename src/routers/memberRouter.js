import express from 'express';
import { getMemberById, addNewMember } from '../controllers/memberController';

const memberRouter = express.Router();

memberRouter.get('/:memberid', getMemberById);
memberRouter.post('/', addNewMember);

export default memberRouter;
