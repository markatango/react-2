import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

// put sagas here
import { fetchCollectionStart } from './shop/shop.sagas';
import rootSaga from './root-saga';
// =================

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [];
middlewares.push(sagaMiddleWare);
middlewares.push(logger)


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// run sagas here
sagaMiddleWare.run(rootSaga);

// =====================

export const persistor = persistStore(store);

//export default { store, persistor };