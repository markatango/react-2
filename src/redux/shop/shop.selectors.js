import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

// input selector returns a piece of state
const selectShop = state => state.shop;

// output selector that uses the input selector to get a piece of the store.
export const selectShopItems = createSelector(
    [selectShop], 
    (shop) => shop.shopData
    );

    // memoize the collectionUrlParam as it can change depending on what the user selects.
export const selectShopItemCategory = memoize((collectionUrlParam) => createSelector(
    [selectShop], 
    (shop) => shop.shopData.find(shopDatum => shopDatum.id === COLLECTION_ID_MAP[collectionUrlParam])
    ));