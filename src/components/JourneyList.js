import React from 'react';
import { connect } from 'react-redux';
import JourneyListItem from './JourneyListItem';

const JourneyList = (props) => (
    <div>
        <h1>Journey List</h1>
        {props.journies.map((journey) => (
            <JourneyListItem {...journey} key={journey.jourID} />
        ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        journies: state.journies
    }
}

export default connect(mapStateToProps)(JourneyList);