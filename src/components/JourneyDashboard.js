import React from 'react';
import { Link } from 'react-router-dom';
import JourneyList from './JourneyList';

const JourneyDashboard = () => (
    <div>
        <div>
            <Link to='/create'><button>+New Journey</button></Link>
        </div>
        <div>
            <JourneyList />
        </div>
    </div>
)

export default JourneyDashboard;