import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import JourneyHeader from '../components/JourneyHeader';
import JourneyDashboard from '../components/JourneyDashboard';
import JourneyShareboard from '../components/JourneyShareboard';
import Contact from '../components/Contact';
import NotfountPage from '../components/NotfoundPage';
import AddJourneyPage from '../components/AddJourneyPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <JourneyHeader />
            <Switch>
                <Route path="/" component={JourneyDashboard} exact={true}/>
                <Route path="/shareboard" component={JourneyShareboard} />
                <Route path="/contact" component={Contact} />
                <Route path="/create" component={AddJourneyPage} />
                <Route component={NotfountPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;