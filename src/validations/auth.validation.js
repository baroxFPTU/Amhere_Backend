import * as yup from 'yup'

const yupSchema = yup.object().shape({
  nickname: yup.string().required()
})
