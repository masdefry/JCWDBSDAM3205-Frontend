/* 
    USESTATE

    1. Penyimpanan dengan scope local component
    2. Mirip seperti variable, namun punya kemampuan re-render halaman ketika ada perubahan data
*/
'use client';

import { useState } from 'react';

let point = 111;

export default function Page() {
  const [data, setData] = useState<number>(0);

  const handleUbahData = () => {
    // setData(100);
    point = 0;
  };

  return (
    <div>
      <h1>Use State</h1>
      <h2>{point}</h2>
      <button
        className='btn bg-blue-500 text-white rounded-md'
        onClick={handleUbahData}
      >
        Ubah Data
      </button>
    </div>
  );
}
