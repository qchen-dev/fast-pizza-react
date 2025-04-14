import { Link } from 'react-router';

import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-400 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-wider">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
