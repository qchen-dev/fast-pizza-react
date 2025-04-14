import { Link } from 'react-router';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-400">
      <Link to="/">Fast React Pizza Co.</Link>

      <SearchOrder />

      <p>User name</p>
    </header>
  );
}

export default Header;
