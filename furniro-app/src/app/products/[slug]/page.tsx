'use client';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuthStore from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { object } from 'yup';
import { hash } from 'crypto';

export default function Page() {
  // Case. Jika belum login, user tidak dapat mengakses halaman detail product. Maka akan dilempar ke halaman login
  const { objectId, hasHydrated } = useAuthStore();
  const router = useRouter();

  const params = useParams();
  const [productDetailData, setProductDetailData] = useState<any>({});

  const onGetProductDetail = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/products/${params?.slug}`
    );

    setProductDetailData(response?.data?.data);
  };

  useEffect(() => {
    onGetProductDetail();
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    
    if (!objectId) router.push('/login');
  }, [objectId, hasHydrated]);

  return (
    <p>
      Product: {productDetailData?.name}{' '}
      {productDetailData?.price?.toLocaleString('id-Id')}
    </p>
  );
}
