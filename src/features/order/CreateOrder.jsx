import { Form, useActionData, useNavigation } from 'react-router';
import { NAVIGATION_STATE } from '../../utils/constants';
import Button from '../../ui/Button';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const navigation = useNavigation();
  const isSubmitting = NAVIGATION_STATE.SUBMITTING === navigation.state;
  // console.log("is submitting", isSubmitting);

  const errors = useActionData();

  return (
    <div className="px-4 py-6 text-start">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow" />
        </div>

        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-600">
              {errors?.phone}
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-10">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-400 focus:ring-3 focus:ring-yellow-500 focus:ring-offset-3 focus:outline-hidden"
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="text-center">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary" className="">
            {isSubmitting ? 'Placing Order...' : 'Order Now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
