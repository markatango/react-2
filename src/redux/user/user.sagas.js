import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { auth, googleProvider, createUsersProfileDocument } from '../../firebase/firebase.utils';


export function* signInWithGoogle() {
    console.log("signInWithGoogle")
    try {
        const userRef = yield auth.signInWithPopup(googleProvider)
        console.log(userRef)
    } catch(error) {
        console.log(`"Google authentication failed with error" ${error}`)
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}

