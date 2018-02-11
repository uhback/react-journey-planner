import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { editJourney } from '../actions/journies';

class EditJourneyPage extends React.Component {
    onSubmit = (journey) => {
        this.props.dispatch(editJourney(journey.JourId, journey));
        this.props.history.push('/');
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
            console.log('journey.JourId: '+journey.JourId);
            // console.log(state.journies);
             console.log('props.match.params.id: '+props.match.params.id);
            return journey.JourId == props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditJourneyPage);