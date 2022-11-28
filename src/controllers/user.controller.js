import Listener from '../models/listenerSchema'
import Member from '../models/memberSchema'
import User from '../models/userSchema'
import { UserService } from '../services/user.service'

const findAll = async (req, res) => {
  try {
    const { role = '' } = req.query
    const users = await UserService.findAll(role)

    res.status(200).json({
      data: users
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: error.message
    })
  }
}

const findOneByUid = async (req, res) => {
  try {
    const { uid } = req.params
    const user = await UserService.findOneByUid(uid)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}

export const UserController = {
  findAll,
  findOneByUid
}
