// combines all code for all reducers
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// use localStorage (persists even when page is closed) as my storage
import storage from 'redux-persist/lib/storage';

// or use sessionStorage (persists unless page is closed)
//import sessionStorage from 'redux-persist/lib/somewhere else

// persist the cart; user is persisted by firebase.
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'cart' ]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer( persistConfig, rootReducer );