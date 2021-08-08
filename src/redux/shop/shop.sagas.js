import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { ShopActionTypes } from './shop.types';

import { 
    fetchCollectionsSuccess,
    fetchCollectionsFailure
 } from './shop.actions';

export function* fetchCollectionsAsync(){

    try{
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (errorMessage) {
        yield put(fetchCollectionsFailure(errorMessage))
    }
    
    // Promise pattern, redux
    /* // get() returns a promise
    collectionRef.get()
    .then(snapShot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message))); // reset isFetching and populate collections
 */

}

// Import the sagas in the store.

// This is a saga.  takeEvery executes them simultaneously
// and cancels an earlier saga if it didn't complete yet.
// arbitrated by saga middleware
export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}
