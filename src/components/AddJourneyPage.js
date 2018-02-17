import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { startAddJourney, startSetMyJourney } from '../actions/journies';
import { Header } from 'semantic-ui-react';

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
                <div className="container-header">
                    <Header as='h2' textAlign='center' color='grey'>Create a New Journey</Header>            
                </div>
                <div className="container-form">
                    <JourneyForm
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startAddJourney: (journey) => dispatch(startAddJourney(journey)),
    startSetMyJourney: () => dispatch(startSetMyJourney())
})
export default connect(undefined, mapDispatchToProps)(AddJourneyPage);