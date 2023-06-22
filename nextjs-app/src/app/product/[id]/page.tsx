import SingleProduct from '../../../components/SingleProduct';
import prisma from "../../../lib/prisma";

const fetchProduct = async (id: any) => {
    let product = null;
    try {
        product = await prisma.product.findUnique({
            where: { id }
        })
    } catch(err) {
        console.error(err);
    }
    return product;
}

export default async function SingleProductPage({ params }) {
    const product = await fetchProduct(params.id);
    return <SingleProduct product={product} />;
}