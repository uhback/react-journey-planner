import { createStore, combineReducers } from 'redux';
import journiesReducer from '../reducers/journies';

export default () => {
    const store = createStore(
        combineReducers({
            journies: journiesReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Dev Tool
    );
    return store;
};