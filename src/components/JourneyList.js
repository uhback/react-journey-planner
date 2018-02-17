import React from 'react';
import { connect } from 'react-redux';
import JourneyListItem from './JourneyListItem';
import { Grid, Image, Card } from 'semantic-ui-react'

const JourneyList = (props) => (
    <div className="container">
        <Card.Group itemsPerRow={4} doubling stackable>
            {props.journies.map((journey) => (
                <JourneyListItem {...journey} key={journey.JourId} />
            ))}
        </Card.Group>
    </div>

)

const mapStateToProps = (state) => {
    return {
        journies: state.journies,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(JourneyList);