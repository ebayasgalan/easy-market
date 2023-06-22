import Order from '../../../components/Order';
import prisma from '@/lib/prisma';

// dynamic head tag is needed later
{/* <Head>
    <title>Easy Market - {order.id}</title>
</Head> */}

const getOrder = async (id) => {
    const order = await prisma.order.findUnique({
        where: { id },
        include: {
            items: true
        }
    });
    return order;
}

export default async function OrderPage({ params }) {
  const { id } = params;
  const order = await getOrder(id);
  return (
    <Order order={order}/>
  );
}