import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { startAddJourney } from '../actions/journies';

class AddJourneyPage extends React.Component {
    onSubmit = (journey) => {
        this.props.startAddJourney(journey);
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
const mapDispatchToProps = (dispatch) => ({
    startAddJourney: (journey) => dispatch(startAddJourney(journey))
})
export default connect(undefined, mapDispatchToProps)(AddJourneyPage);