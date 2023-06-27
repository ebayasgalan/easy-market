import './styles/cartCountStyles.scss';

export default function CartCount({ count }: { count: number}) {
  return (
    <div className='count'>
      {count}
    </div>
  );
}