import UpdateProduct from '../../components/UpdateProduct';

export default function UpdatePage({ searchParams }) {
  // console.log('UpdatePage, params: ', searchParams);
  return (
    <div>
      <UpdateProduct id={searchParams.id} />
    </div>
  );
}