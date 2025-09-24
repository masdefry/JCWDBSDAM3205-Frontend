import Image from 'next/image';
import { RiUser6Line } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function Page() {
  return (
    <div>
      {/* NAVBAR SECTION */}
      <nav className='grid grid-cols-3 p-5 bg-gray-300'>
        <div>
          <Image
            src={'/static/Frame 168.png'}
            alt='Logo Funniro'
            width={185}
            height={41}
          />
        </div>
        <div className='flex items-center justify-center gap-10 font-bold'>
          <div>Home</div>
          <div>Shop</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className='flex items-center justify-end gap-5'>
          <RiUser6Line className='text-2xl' />
          <CiSearch className='text-2xl' />
          <IoIosHeartEmpty className='text-2xl' />
          <AiOutlineShoppingCart className='text-2xl' />
        </div>
      </nav>

      {/* FORM LOGIN SECTION */}
      <div className='flex justify-center p-10'>
        <div className='w-[500px]'>
          <h1 className='text-2xl font-bold'>Login Account</h1>
          <form>
            <fieldset className='fieldset w-full'>
              <legend className='fieldset-legend'>What is your name?</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='Type here'
              />
              <p className='label'>Optional</p>
            </fieldset>
            <fieldset className='fieldset w-full'>
              <legend className='fieldset-legend'>What is your name?</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='Type here'
              />
              <p className='label'>Optional</p>
            </fieldset>
            <button className='btn btn-outline mt-5'>Login Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
