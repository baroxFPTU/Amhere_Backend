import * as yup from 'yup'

const yupSchema = yup.object().shape({
  nickname: yup.string().required()
})

export const AuthValidation = {
  login: (req, res, next) => {
    const { uid } = req.body
    if (!uid) res.status(400).json({ errors: { message: 'UserID is required.' } })
    next()
  }
}
