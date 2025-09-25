export default function CardProduct(props: any) {
  return (
    <div>
      <h1>{props._product?.name}</h1>
      <p>{props._product?.price}</p>
      <p>{props.bebas}</p>
    </div>
  );
}
