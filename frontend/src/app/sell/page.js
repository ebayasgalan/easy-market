import CreateProduct from '../../components/CreateProduct';
import PleaseSignin from '../../components/PleaseSignin';

export default function SellPage() {
  return (
    <div>
      <PleaseSignin>
        <CreateProduct />
      </PleaseSignin>
    </div>
  );
}
