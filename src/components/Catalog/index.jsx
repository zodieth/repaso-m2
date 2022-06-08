import { connect, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';

const Catalog = ({ products }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <h2>Catálogo</h2>
      {products.map((prod) => (
        <p key={prod.id}>
          {prod.title}
          <button onClick={() => handleClick(prod)}>Agregar al carrito</button>
        </p>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Catalog);
