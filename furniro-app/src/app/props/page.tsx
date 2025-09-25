const products = [
  {
    id: 1,
    name: 'Sepatu',
    price: 15000000,
  },
  {
    id: 2,
    name: 'Kaos',
    price: 500000,
  },
];
import CardProduct from './components/CardProduct';

export default function () {
  return (
    <>
      {products?.map((product: any, index: any) => {
        return (
          <CardProduct
            key={index}
            _product={product}
            bebas="abc"
          />
        );
      })}
    </>
  );
}

/* 
    PROPS: Digunakan untuk mengirim data dari parent -> child component
*/