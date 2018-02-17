import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JourneyList from './JourneyList';
import { startSetMyJourney } from '../actions/journies';
import { Button } from 'semantic-ui-react'

class JourneyDashboard extends React.Component {
    render() {        
        return (
            <div className="container">
                <div className="container-sort">
                    <Link to='/create'><Button color='black'>+New Journey</Button></Link>
                </div>
                <div className="container-list">
                    <JourneyList />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetMyJourney: () => dispatch(startSetMyJourney())
})

export default connect(undefined, mapDispatchToProps)(JourneyDashboard);