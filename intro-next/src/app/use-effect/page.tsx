/*
    USEEFFECT (LIFECYCLE METHODS)

    1. componentDidMount: Method yg akan di eksekusi ketika halaman akan dibuka
        useEffect(() => {
        }, [])

    2. componentDidUpdate: Method yg akan di eksekusi ketika halaman telah dibuka dan terjadi perubahan pada state
        useEffect(() => {
        }, [state])

    3. componentWillUnmount: Method yg akan di eksekusi ketika halaman akan ditutup/dihapus
        useEffect(() => {
            return () => {
            
            }
        }, [])
*/
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    console.log('1. Trigger');
  }, []);

  useEffect(() => {
    return () => {
      console.log('3. Trigger');
    };
  }, []);

  return (
    <div>
      <Link href='/use-state'>Go to use-state page</Link>
    </div>
  );
}
