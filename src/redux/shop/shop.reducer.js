import SHOP_DATA from './shop.data.js';

const INITIAL_STATE = {
    shopData: SHOP_DATA
};
  
const action = true;

const shopReducer = (state = INITIAL_STATE, action) => {
switch (action) {
    default:
    return state;
  }
};

export default shopReducer;