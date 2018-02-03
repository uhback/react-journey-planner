import React from 'react';
import JourneyForm from './JourneyForm';

class EditJourneyPage extends React.Component {
    render () {
        return (
            <div>
                <JourneyForm />
                <button>Remove</button>
            </div>
        )
    }
}

export default EditJourneyPage;