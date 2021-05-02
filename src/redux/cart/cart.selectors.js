import { createSelector } from 'reselect';

// input selector returns a piece of state
const selectCart = state => state.cart;

// output selector that uses the input selector to get a piece of the store.
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce( (accume, cartItem) => accume + cartItem.quantity, 0));