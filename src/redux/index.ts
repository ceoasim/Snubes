import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware, } from '@reduxjs/toolkit'
import { reduxBatch } from '@manaflair/redux-batch'


import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import createSagaMiddleware from 'redux-saga'


import userReducer from './user/reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const migrations = {
    0: (state: any) => ({
        ...state
    })
   
};

const userPersistConfig = {
    key: 'user',
    storage: storage,
    blacklist: ['baycTokens', 'baycTokenLoading', 'createWalletLoding', 'getWalletLoading', 'addNewNftLoading', 'whiteListRequestLoading', 'whiteListLoading', 'addStatusLoading', 'setPermissionLoading', 'getWalletTokensLoading', 'getWalletContractsLoading'],
};
const userReducerPersisted = persistReducer(userPersistConfig, userReducer);

const rootReducer = combineReducers({
    user: userReducerPersisted
});

const persistConfig = {
    key: 'root',
    version: 0,
    storage: storage,
    migrate: createMigrate(migrations, { debug: false }),
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
    ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: true,
    }),
    sagaMiddleware,
]

const store = configureStore({
    reducer: pReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch],
})

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

sagaMiddleware.run(mySaga)

export default store
