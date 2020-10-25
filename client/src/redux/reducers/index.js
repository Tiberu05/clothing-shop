import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import cartReducer from './cartReducer';
import directoryReducer from './directoryReducer';
import shopReducer from './shopReducer';
import navReducer from './navReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    nav: navReducer
});

export default persistReducer(persistConfig, rootReducer);