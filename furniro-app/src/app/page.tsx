import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className='flex'>
        <div
          style={{
            position: 'relative',
            width: '100px',
            height: '300px',
            backgroundColor: 'red',
          }}
        >
          <Image
            src={'/kucing.jpg'}
            alt='Image'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            width: '100px',
            height: '300px',
            backgroundColor: 'red',
          }}
        >
          <Image
            src={'/kucing.jpg'}
            alt='Image'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
