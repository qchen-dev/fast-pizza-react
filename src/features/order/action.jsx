import { redirect } from 'react-router';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: 'on' === data.priority,
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'invalue phone number';
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // if everything is ok, create new order and redirect
  const newOrder = await createOrder(order);
  // console.log(newOrder);
  return redirect(`/order/${newOrder.id}`);
}
