import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { startEditJourney, startSetMyJourney, startDeleteJourney } from '../actions/journies';

class EditJourneyPage extends React.Component {
    onSubmit = (journey) => {
        this.props.startEditJourney(this.props.journey.JourId, journey).then(() => {
            this.props.startSetMyJourney()
        })
        this.props.history.push('/dashboard');
    }
    onDelete = () => {
        this.props.startDeleteJourney({ JourId: this.props.journey.JourId }).then(() => {
            this.props.startSetMyJourney()
        });
        this.props.history.push('/dashboard');
    }
    render () {
        return (
            <div>
                <JourneyForm 
                    journey={this.props.journey}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onDelete}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        journey: state.journies.find((journey) => {
            return journey.JourId == props.match.params.id;
        })
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditJourney: (JourId, journey) => dispatch(startEditJourney(JourId, journey)),
    startSetMyJourney: () => dispatch(startSetMyJourney()),
    startDeleteJourney: (data) => dispatch(startDeleteJourney(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditJourneyPage);