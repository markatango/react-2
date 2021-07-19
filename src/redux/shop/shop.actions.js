import { ShopActionTypes }  from './shop.types';
export const fetchShopData = (collectionsMap) =>  ({
    type: ShopActionTypes.GET_SHOP_DATA,
    payload: collectionsMap
});