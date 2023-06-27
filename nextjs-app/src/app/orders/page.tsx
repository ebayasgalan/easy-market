import Orders from '@/components/Orders';
import prisma from '@/lib/prisma';

const getAllOrders = async () => {
    const allOrders = await prisma.order.findMany({
        include: {
            items: true
        }
    });
    return allOrders;
}

export default async function OrdersPage() {
    const orders = await getAllOrders();
    return (
        <Orders orders={orders} />
    )
}