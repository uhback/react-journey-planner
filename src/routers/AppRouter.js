import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import JourneyDashboard from '../components/JourneyDashboard';
import JourneyShareboard from '../components/JourneyShareboard';
import Contact from '../components/Contact';
import NotfountPage from '../components/NotfoundPage';
import JourneyCreateForm from '../components/JourenyCreateForm';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={JourneyDashboard} exact={true}/>
                <Route path="/shareboard" component={JourneyShareboard} />
                <Route path="/contact" component={Contact} />
                <Route path="/journeycreate" component={JourneyCreateForm} />
                <Route component={NotfountPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;