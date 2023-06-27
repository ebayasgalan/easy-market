import './styles/productStyles.scss';
import Image from 'next/image';

export default function SingleProduct({ product }: any) {

  // console.log('SingleProduct, product: ', product);
  return (
    <div className="singleProduct">
      <Image
        src={product.photo}
        alt={product.name}
        width={600}
        height={400}
        style={{objectFit: 'cover'}}
      />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}