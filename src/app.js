import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configStore from './store/configStore';
import { login, logout } from './actions/auth';
import { startSetMyJourney } from './actions/journies';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
//import { addJourney } from './actions/journies';

const store = configStore();

//store.dispatch(addJourney({ jourID: '12345', title: 'NZ Summer Vacation', note:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', startDate: 1517871600000, endDate: 1519340400000}));
//store.dispatch(addJourney({ jourID: '67890', title: 'Asia', note: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', startDate: 1518735600000, endDate: 1519686000000}));

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

// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// const user = store.getState().auth;

// store.subscribe((user) => {
//     console.log(store.getState());
//     if (user.uid) {
//         console.log('1')
//         store.dispatch(login(user.uid));
//         store.dispatch(startSetMyJourney());
//         //renderApp();
//         if (history.location.pathname === '/') {
//             history.push('/dashboard');
//         }
//     } else {
//         console.log('2')
//         store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// })

// if (user.uid) {
//     console.log('1'); 
//     store.dispatch(login(user.uid));
//     store.dispatch(startSetMyJourney()).then(() => {
//         renderApp();
//         if (history.location.pathname === '/') {
//             history.push('/dashboard');
//         }
//     })
// } else {
//     console.log('2');
//     store.dispatch(logout());
//     renderApp();
//     history.push('/');
// }

// console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('app'));

