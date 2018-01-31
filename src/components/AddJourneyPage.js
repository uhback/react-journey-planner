import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { addJourney } from '../actions/journies';

class AddJourneyPage extends React.Component {
    onSubmit = (journey) => {
        this.props.dispatch(addJourney(journey));
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h2>Create a New Journey</h2>
                <JourneyForm
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
} 
export default connect()(AddJourneyPage);