import Order from '../../../components/Order';
import prisma from '@/lib/prisma';
import { Metadata, ResolvingMetadata } from 'next';

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
    title: 'Order id: ' + id,
  }
}

const getOrder = async (id) => {
    const order = await prisma.order.findUnique({
        where: { id },
        include: {
            items: true
        }
    }).catch(err => console.error(err));
    return order;
}

export default async function OrderPage({ params }) {
  const { id } = params;
  let order = null;
  try {
    order = await getOrder(id);
  } catch(err) {
    console.error(err);
  }

  return (
    <Order order={order}/>
  );
}