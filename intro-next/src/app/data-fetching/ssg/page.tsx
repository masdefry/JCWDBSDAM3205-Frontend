export default async function Page() {
  const res = await fetch(`http://localhost:3001/products`, {
    cache: 'force-cache',
  });
  const products = await res.json();
  return (
    <div>
      <h1>SSG - Static Site Generator</h1>
      <ol>
        {products?.map((product: any, index: any) => {
          return <li key={index}>{product?.name}</li>;
        })}
      </ol>
    </div>
  );
}
