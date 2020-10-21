import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
//import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
//import { fetchCollectionsStart } from './sagas/shop';
import rootSaga from './sagas/rootSaga';


import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


export const store = createStore(
    reducers, 
    compose (
        applyMiddleware(...middlewares),
        composeWithDevTools()
    )
);

sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);
    
