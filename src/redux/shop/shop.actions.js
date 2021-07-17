// used for alternate ways of storing SHOP_DATA into firebase
import { ShopActionTypes }  from './shop.types';

export const fetchShopData = (collectionsMap) => {
  console.log("CollectionsMap:");
  console.log(collectionsMap);
  return ({
  type: ShopActionTypes.GET_SHOP_DATA,
  payload: collectionsMap
})};
