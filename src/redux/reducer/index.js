import { ADD_TO_CART, GET_ALL_PRODUCTS, REMOVE_FROM_CART } from '../actions';

const initialState = {
  products: [],
  cart: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        // cart: state.cart.concat(action.payload) ESTA ES LO MISMO QUE 👇
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload),
      };

    default:
      return state;
  }
};
