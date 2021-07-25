import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsSuccess = (collectionsMap) =>{ 
    console.log("In fetchCollectionsSuccess");
    return ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});}

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsStartAsync = () => {
   // console.log("In fetchCollectionsStartAsync");
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart()); // set the isFetching bit
        // get() returns a promise
        collectionRef.get()
        .then(snapShot => {
            console.log("about to extract collectionsMap")
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        })
        .catch(error => dispatch(fetchCollectionsFailure(error))); // reset isFetching and populate collections
    }
};

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});
