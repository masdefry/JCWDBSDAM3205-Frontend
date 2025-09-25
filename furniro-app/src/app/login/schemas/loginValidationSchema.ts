import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .email('Email format is invalid')
    .required('Username is required'),
  password: Yup.string().required('Password is required'),
});
