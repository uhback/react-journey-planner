import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const JourneyDashboard = () => (
    <div>
        <h1>JourneyDashboard</h1>
        <Button positive as={Link} to="/journeycreate">+ New Joureny</Button>
    </div>
)

export default JourneyDashboard;