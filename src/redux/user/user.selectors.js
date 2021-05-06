import { createSelector } from 'reselect';


// input selector returns a piece of state
const selectUser = state => state.user;

// output selector that uses the input selector to get a piece of the store.
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

//xport const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce( (accume, cartItem) => accume + cartItem.quantity, 0));