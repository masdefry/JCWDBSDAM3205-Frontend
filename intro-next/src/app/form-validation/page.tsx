'use client';
import { useFormik } from 'formik';
import { createProductSchema } from './schemas/createProductSchema';
import axios from 'axios';

export default function Page() {
  const formik = useFormik({
    initialValues: {
      a: '',
      b: 0,
    },
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      // Http request: POST, data: {name, price}
      await axios.post('http://localhost:3000/api/products', {
        name: data?.a,
        price: Number(data?.b),
      });
      alert('Success');
      resetForm();
    },
    validationSchema: createProductSchema,
  });

  return (
    <div>
      <form
        onSubmit={formik?.handleSubmit}
        className='card w-96 bg-base-100 shadow-sm'
      >
        <div className='card-body'>
          <h1 className='text-2xl'>Create Product</h1>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product name:</legend>
            <input
              type='text'
              className='input'
              placeholder='Type here'
              name='a'
              onChange={formik?.handleChange}
              value={formik?.values?.a}
            />
            {formik?.errors?.a && formik?.touched?.a && (
              <p
                id='feedback'
                className='text-red-500'
              >
                {formik?.errors?.a}
              </p>
            )}
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product price:</legend>
            <input
              type='text'
              className='input'
              placeholder='Type here'
              name='b'
              onChange={formik?.handleChange}
              value={formik?.values?.b}
            />
            <p className='label'>Error message here</p>
          </fieldset>
          <button className='btn bg-blue-500 text-white'>Create Product</button>
        </div>
      </form>
    </div>
  );
}
