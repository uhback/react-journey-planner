import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { editJourney } from '../actions/journies';

class EditJourneyPage extends React.Component {
    onSubmit = (journey) => {
        this.props.dispatch(editJourney(journey.jourID, journey));
        this.props.history.push('/dashboard');
    }

    render () {
        return (
            <div>
                <JourneyForm 
                    journey={this.props.journey}
                    onSubmit={this.onSubmit}
                />
                <button>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        journey: state.journies.find((journey) => {
            return journey.jourID === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditJourneyPage);