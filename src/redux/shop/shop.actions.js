import fetchShopData from '../../firebase/firebase.utils';
export const getShopData = () => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: fetchShopData()
});
