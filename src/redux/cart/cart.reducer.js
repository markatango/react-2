  
import { CartActionTypes } from './cart.types';
import { addItemsToCart } from './cart.utils';
import { delItemFromCart } from './cart.utils';
import { decItemsInCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.DEC_ITEM:
      return {
        ...state,
        cartItems: decItemsInCart(state.cartItems, action.payload)
      };
    case CartActionTypes.DEL_ITEM:
    return {
      ...state,
      cartItems: delItemFromCart(state.cartItems, action.payload)
    };
    default:
      return state;
  }
};

export default cartReducer;