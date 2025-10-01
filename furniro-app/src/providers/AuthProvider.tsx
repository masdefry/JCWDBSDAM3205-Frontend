'use client';
import { useEffect } from 'react';
import useAuthStore from '@/store/useAuthStore';
import axios from 'axios';

export default function AuthProvider({ children }: any) {
  const { setAuthStore, objectId } = useAuthStore();

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

  // ComponentDidUpdate
  useEffect(() => {
    console.log('authProvider');
    /*
      useEffect disini dipanggil 2x. Saat halaman pertama kali di akses, dan saat 
      objectId useAuthStore terisi dari localStorage. 

      Maka untuk menghindari pemanggilan onSessionLoginAccount 2x, diberi pengkondisian. 
      Sehingga onSessionLoginAccount baru dipanggil ketika objectId nya sudah terisi
    */
    if (objectId) {
      onSessionLoginAccount();
    }
  }, [objectId]);

  return <>{children}</>;
}
