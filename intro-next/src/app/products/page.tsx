'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page() {
  const [productsData, setProductsData] = useState<any[]>([]);

  const getProductsData = async () => {
    const response: any = await axios.get('http://localhost:3000/api/products');
    setProductsData(response?.data?.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      {JSON.stringify(productsData)}
      {productsData?.map((product, index) => {
        return (
          <div className='card bg-base-100 w-96 shadow-sm'>
            <figure>
              <img
                src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{product.name}</h2>
              <p>{product.price}</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Ada 2 method untuk melakukan network call:
// fetch()  : Method bawaan dari JS
// axios    : Method dari library
