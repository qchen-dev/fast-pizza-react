import { Outlet, useNavigation } from 'react-router';

import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { NAVIGATION_STATE } from '../utils/constants';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === NAVIGATION_STATE.LOADING;
  // console.log(navigation);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll bg-orange-100 p-15 text-center">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
