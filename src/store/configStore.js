import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import journiesReducer from '../reducers/journies';
import authReducer from '../reducers/auth';
import sharedJourniesReducer from '../reducers/sharedJournies';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            journies: journiesReducer,
            sharedJournies: sharedJourniesReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Dev Tool
    );
    return store;
};