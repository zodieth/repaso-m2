import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <h2>Carrito</h2>
      {cart.map((prod) => (
        <p key={prod.id}>
          {prod.title}
          <button onClick={() => handleClick(prod.id)}>Quitar del carrito</button>
        </p>
      ))}
    </>
  );
};
