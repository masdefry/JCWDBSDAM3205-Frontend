import * as Yup from 'yup';

export const createProductSchema = Yup.object().shape({
  a: Yup.string()
    .required('a is required')
    .min(8, 'a must have minimum 8 characters'),
  b: Yup.number()
    .min(1, 'b must have minimum value is 1')
    .required('b is required'),
});
