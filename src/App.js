import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import { getAllProducts } from './redux/actions';

function App({ getAllProducts }) {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Route path='/' exact component={Catalog} />
      <Route path='/cart' component={Cart} />
    </>
  );
}

export default connect(null, { getAllProducts })(App);
