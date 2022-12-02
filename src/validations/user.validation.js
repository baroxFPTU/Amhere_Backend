const { userSchemaYup } = require('../models/user.model')

module.exports.UserValidation = {
  updateOneByUid: async (req, res, next) => {
    const { uid } = req.params
    const data = req.body
    data.uid = uid
    console.log({ uid })
    if (!uid) {
      res.status(403).json({
        message: 'Invalid User ID provided'
      })
    }

    try {
      await userSchemaYup.validate(data)
      next()
    } catch (error) {
      console.log(error)
      res.status(403).json({
        error: 'Something went wrong'
      })
    }
  }
}
