import Orders from '@/components/Orders';
import prisma from '@/lib/prisma';

const getAllOrders = async () => {
    const allOrders = await prisma.order.findMany({
        include: {
            items: true
        }
    }).catch(err => console.error(err));
    return allOrders;
}

export default async function OrdersPage() {
    let orders = null;
    try {
        orders = await getAllOrders();
    } catch(err) {
        console.error(err);
    }
    return (
        <Orders orders={orders} />
    )
}