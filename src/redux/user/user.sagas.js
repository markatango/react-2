import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { auth, googleProvider, createUsersProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from './user.actions';
import { emptyCart } from '../cart/cart.actions';

export function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUsersProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    console.log("signInWithGoogle")
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

 // we get the whole payload, but only need email and password
export function* signInWithEmail({payload: {email, password}}) {
    console.log("signInWithEmail")
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        yield put(signInFailure(error))
    } 
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
    try{
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
        yield put(emptyCart())
        } catch (error) {
            yield put(signOutFailure(error))
        }
}

export function* onSignOutUser() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutUser)
    ])
}

