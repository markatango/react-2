import { ShopActionTypes } from './shop.types';
export const getShopData = (collectionsMap) => ({
    type: ShopActionTypes.GET_SHOP_DATA,
    payload: collectionsMap
});
