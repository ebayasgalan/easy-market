import UpdateProduct from '../../components/UpdateProduct';

export default function UpdatePage({ params }) {
  console.log(params);
  return (
    <div>
      <UpdateProduct id={params.id} />
    </div>
  );
}