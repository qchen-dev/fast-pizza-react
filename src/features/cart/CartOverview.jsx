import { Link } from 'react-router';

function CartOverview() {
  return (
    <div className="bg-stone-700 text-stone-100">
      <p className="text-stone-200">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
