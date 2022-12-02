const yup = require('yup')
const { userSchemaYup } = require('../models/user.model')

const yupSchema = yup.object().shape({
  nickname: yup.string().required()
})

const AuthValidation = {
  login: (req, res, next) => {
    const { token } = req.body
    if (!token) res.status(400).json({ errors: { message: 'Token is required.' } })
    next()
  },
  registerWithPassword: async (req, res, next) => {
    try {
      const user = req.body
      await userSchemaYup.validate(user, { abortEarly: false })
      next()
    } catch (error) {
      res.status(400).json({ errors: error?.errors || error.message })
    }
  }
}

module.exports = {
  AuthValidation
}
