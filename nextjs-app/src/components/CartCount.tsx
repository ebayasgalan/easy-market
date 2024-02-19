export default function CartCount({ count }: { count: number}) {
  return (
    <div className='bg-indigo-400 rounded-full text-base font-semibold m-auto w-6 text-center hidden sm:block ml-2'>
      {count}
    </div>
  );
}