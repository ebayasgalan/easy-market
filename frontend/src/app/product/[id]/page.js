'use client';

import SingleProduct from '../../../components/SingleProduct';

export default function SingleProductPage({ params }) {
  return <SingleProduct id={params.id} />;
}
