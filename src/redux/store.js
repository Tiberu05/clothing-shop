import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './reducers';

const middlewares = [logger, ReduxThunk];

const store = createStore(
    reducers, 
    compose (
        applyMiddleware(...middlewares),
        composeWithDevTools()
    )
)
    

export default store;