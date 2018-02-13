import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { startAddJourney, startSetMyJourney } from '../actions/journies';

class AddJourneyPage extends React.Component {
    onSubmit = (journey) => {
        this.props.startAddJourney(journey).then(() => {
            this.props.startSetMyJourney()
        })
        this.props.history.push('/dashboard');
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
    startAddJourney: (journey) => dispatch(startAddJourney(journey)),
    startSetMyJourney: () => dispatch(startSetMyJourney())
})
export default connect(undefined, mapDispatchToProps)(AddJourneyPage);