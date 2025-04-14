import { useLoaderData } from 'react-router';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
