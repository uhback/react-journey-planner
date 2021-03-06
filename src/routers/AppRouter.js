import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import JourneyHeader from '../components/JourneyHeader';
import JourneyDashboard from '../components/JourneyDashboard';
import ShareJourneyBoard from '../components/ShareJourneyBoard';
import Contact from '../components/Contact';
import NotfountPage from '../components/NotfoundPage';
import AddJourneyPage from '../components/AddJourneyPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';
import EditJourneyPage from '../components/EditJourneyPage';
import AddUserPage from '../components/AddUserPage';

export const history = createHistory(); // createBrowserHistory

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PublicRoute path="/signin" component={AddUserPage} />
                <PrivateRoute path="/dashboard" component={JourneyDashboard} />
                <PrivateRoute path="/shareboard" component={ShareJourneyBoard} />
                <PrivateRoute path="/contact" component={Contact} />
                <PrivateRoute path="/create" component={AddJourneyPage} />
                <PrivateRoute path="/edit/:id" component={EditJourneyPage} />
                <Route component={NotfountPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;