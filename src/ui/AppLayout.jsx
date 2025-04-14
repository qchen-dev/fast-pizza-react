import { Outlet, useNavigation } from 'react-router';

import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { NAVIGATION_STATE } from '../utils/constants';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === NAVIGATION_STATE.LOADING;
  console.log(navigation);

  return (
    // <div>
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <main>
        <h1>AppLayout Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
