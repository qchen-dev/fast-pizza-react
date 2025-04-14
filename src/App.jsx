import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu from './features/menu/Menu';
import { loader as menuLoader } from './features/menu/loader';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import { action as createOrderAction } from './features/order/action';
import Order from './features/order/Order';
import { loader as orderLoader } from './features/order/loader';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading...</p>} // This is your HydrateFallback
    />
  );
}

export default App;
