import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addJourney } from './actions/journies';

const store = configStore();

// store.dispatch(addJourney({ title: 'Euro', note:'Trip'}));
// store.dispatch(addJourney({ title: 'Asia', note: 'Family'}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));