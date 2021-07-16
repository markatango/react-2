// import SHOP_DATA from './shop.data.js';
import fetchShopData from './shop.utils';
import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections: {}
};
  
const shopReducer = (state = INITIAL_STATE, action) => {
switch (action.types) {
    case ShopActionTypes.GET_SHOP_DATA:
      return {
        ...state,
        collections: fetchShopData()
      };
    default:
     return state;
  }
};

export default shopReducer;