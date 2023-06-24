import prisma from "../../lib/prisma";
// import { getCurrentUser } from '../../lib/server-actions';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

// const getAllProducts = async () => {
//   const products = await prisma.product.findMany();
//   return products;
// }
const testFunc = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: "GET"
  });
  const todos = await res.json();
  return todos;
}

export default async function ProductsPage({ params }) {
  // const page = parseInt(params.page);
  const todos = await testFunc();
  console.log('ProductsPage, todos: ', todos);
  console.log('ProductsPage, params: ', params);

  // Initiate both requests in parallel
  // const productsData = getAllProducts();
  // const userData = getCurrentUser();

  // Wait for the promises to resolve
  // const [products, user] = await Promise.all([productsData, userData]);

  return (
    <main>
      <h1>From Products Component</h1>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo.title}</li>)}
      </ul>
      {/* <Pagination page={page || 1} productsCount={products.length} /> */}
      {/* <Products page={page || 1} products={products} userId={user?.id} /> */}
      {/* <Pagination page={page || 1} productsCount={products.length} /> */}
    </main>
  )
}
