import React from 'react';
import { connect } from 'react-redux';
import JourneyForm from './JourneyForm';
import { startEditJourney, startSetMyJourney, startDeleteJourney } from '../actions/journies';
import { Header, Button } from 'semantic-ui-react';

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
                <div className="container-header">
                    <Header as='h2' textAlign='center' color='grey'>Edit my journey</Header>            
                    <div className="container-form">
                        <JourneyForm 
                            journey={this.props.journey}
                            onSubmit={this.onSubmit}
                        />
                        <Button onClick={this.onDelete} color='red' floated='left' >Delete</Button>                        
                    </div>
                </div>
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