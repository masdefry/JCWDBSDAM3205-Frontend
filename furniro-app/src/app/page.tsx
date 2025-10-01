'use client';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [productsData, setProductsData] = useState<any[]>([]);
  const onGetProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProductsData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Step-02 Execute useEffect()
  useEffect(() => {
    onGetProducts();
  }, []);

  // Step-01 Render component
  return (
    <div className='grid grid-cols-4 px-5 py-5'>
      {productsData?.map((product, index) => {
        return (
          <Link href={`/products/${product?.objectId}`}>
            <div
              key={index}
              className='card bg-base-100 shadow-sm'
            >
              <figure>
                <img
                  src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{product?.name}</h2>
                <p>Rp.{product?.price.toLocaleString('id-ID')}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
