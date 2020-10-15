import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './reducers';

const middlewares = [ReduxThunk];

export const store = createStore(
    reducers, 
    compose (
        applyMiddleware(...middlewares),
    )
);

export const persistor = persistStore(store);
    
