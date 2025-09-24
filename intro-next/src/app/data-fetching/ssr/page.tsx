export default async function Page() {
  const res = await fetch(`http://localhost:3001/products`, {
    cache: 'no-store',
  });
  const products = await res.json();
  console.log(products);

  return (
    <>
      <h1>SSR - Server Side Rendering</h1>
      <ol>
        {products?.map((product: any, index: any) => {
          return <li key={index}>{product?.name}</li>;
        })}
      </ol>
    </>
  );
}
