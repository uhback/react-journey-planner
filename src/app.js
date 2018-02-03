import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configStore from './store/configStore';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addJourney } from './actions/journies';

const store = configStore();

// store.dispatch(addJourney({ title: 'Euro', note:'Trip'}));
// store.dispatch(addJourney({ title: 'Asia', note: 'Family'}));

// let hasRendered = false;
// const renderApp = () => {
//     if(!hasRendered) {
//         console.log(hasRendered);
//         ReactDOM.render(jsx, document.getElementById('app'));
//         hasRendered = true;
//     }
// }


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));


// export const AuthState = (auth) => {
//     console.log('auth: '+ auth.uid);
//     if (auth) {
//         store.dispatch(login(auth.uid));
//         renderApp();
//         if (history.location.pathname === '/') {
//             history.push('/dashboard');
//         }
//     } else {
//         store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// }

// ReactDOM.render(<AuthState />, document.getElementById('app'));
