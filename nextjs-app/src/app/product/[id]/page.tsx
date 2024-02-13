import SingleProduct from '../../../components/SingleProduct';
import prisma from "../../../lib/prisma";
import { Metadata, ResolvingMetadata } from 'next';
import { getCurrentUser } from '../../../lib/server-actions';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  return {
    title: 'Product id: ' + id,
  }
}

const fetchProduct = async (id: string) => {
    let product = null;
    try {
        product = await prisma.product.findUnique({
            where: { id }
        })
    } catch(err) {
        console.error('product page, err: ', err);
    }
    return product;
}

export default async function SingleProductPage({ params }: any) {
  let userData = null,
      product = null;

  try {
    userData = await getCurrentUser();
  } catch(err) {
    console.error(err);
  }

  try {
    product = await fetchProduct(params.id);
  } catch(err) {
    console.error(err);
  }

  return <SingleProduct product={product} userId={userData?.id} />;
}