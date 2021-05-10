import { createSelector } from 'reselect';

// input selector returns a piece of state
const selectShop = state => state.shop;

// output selector that uses the input selector to get a piece of the store.
export const selectShopItems = createSelector([selectShop], (shop) => shop.shopData);