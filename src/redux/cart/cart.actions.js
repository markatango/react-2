import { CartActionTypes }  from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const decItem = item => ({
  type: CartActionTypes.DEC_ITEM,
  payload: item
});

export const delItem = item => ({
  type: CartActionTypes.DEL_ITEM,
  payload: item
});

export const emptyCart = item => ({
  type: CartActionTypes.EMPTY_CART
});