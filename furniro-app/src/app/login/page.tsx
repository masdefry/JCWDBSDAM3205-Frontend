'use client';
import { useFormik } from 'formik';
import { loginValidationSchema } from './schemas/loginValidationSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuthStore from '@/store/useAuthStore';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { setAuthStore, objectId } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLoginAccount = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          username: username,
          password: password,
        }
      );
      console.log(response?.data?.data);
      /* Men-trigger method `setAuthStore` dan mengirimkan argument email yg didapat dari response login */
      setAuthStore({
        _email: response?.data?.data?.email,
        _username: response?.data?.data?.name,
        _objectId: response?.data?.data?.objectId,
      });
      toast.success('Login account successfully');
      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSessionLoginAccount = async () => {
    const response = await axios.post(
      'http://localhost:3000/api/auth/session-login',
      {
        objectId,
      }
    );

    setAuthStore({
      _email: response?.data?.data?.email,
      _username: response?.data?.data?.name,
      _objectId: response?.data?.data?.objectId,
    });
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      handleLoginAccount(values?.username, values?.password);
    },
  });

  // ComponentDidUpdate
  useEffect(() => {
    /*
      useEffect disini dipanggil 2x. Saat halaman pertama kali di akses, dan saat 
      objectId useAuthStore terisi dari localStorage. 

      Maka untuk menghindari pemanggilan onSessionLoginAccount 2x, diberi pengkondisian. 
      Sehingga onSessionLoginAccount baru dipanggil ketika objectId nya sudah terisi
    */
    console.log('useEffect:::');
    if (objectId) {
      onSessionLoginAccount();
    }
  }, [objectId]);

  return (
    <div>
      {/* FORM LOGIN SECTION */}
      <div className='flex justify-center p-10'>
        <div className='w-[500px]'>
          <h1 className='text-2xl font-bold'>Login Account</h1>
          <form onSubmit={formik.handleSubmit}>
            <fieldset className='fieldset w-full'>
              <legend className='fieldset-legend'>Type your username:</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='email@email.com'
                name='username'
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <p className='label text-red-500'>
                {formik?.errors?.username ?? ''}
              </p>
            </fieldset>
            <fieldset className='fieldset w-full'>
              <legend className='fieldset-legend'>Type your password:</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='******'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <p className='label text-red-500'>
                {formik?.errors?.password ?? ''}
              </p>
            </fieldset>
            <button
              type='submit'
              disabled={isLoading}
              className='btn btn-outline mt-5'
            >
              Login Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
