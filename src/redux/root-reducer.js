// combines all code for all reducers
import userReducer from './user/user.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer
})