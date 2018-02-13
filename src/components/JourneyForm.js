import React, { Compoent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
//import uuid from 'uuid';
import 'react-dates/lib/css/_datepicker.css';

class JourneyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            JourId: props.journey ? props.journey.JourId : undefined,
            Title: props.journey ? props.journey.Title : '',
            Note: props.journey ? props.journey.Note : '',
            StartDate: props.journey ? moment(props.journey.StartDate) : moment(),
            EndDate: props.journey ? moment(props.journey.EndDate) : moment(),
            UserID: props.auth ? props.auth.uid : '',
            State: 'A',
            focusedInput: null,
            error: ''
        }

    }


    onTitleChange = (e) => {
        const Title = e.target.value; // Name has to be a same name of State
        this.setState(() => ({ Title }));
    }
    onNoteChange = (e) => {
        const Note = e.target.value;
        this.setState(() => ({ Note }));
    }
    onDatesChange = ({ startDate, endDate }) => {  
        this.setState({
            StartDate: startDate,
            EndDate: endDate
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.Title && this.state.StartDate && this.state.EndDate) {
            this.setState(() => ({ error: 'Please fill the all blanks'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                JourId: this.state.JourId,                
                Title: this.state.Title,
                StartDate: this.state.StartDate.format('YYYY-MM-DD'),
                EndDate: this.state.EndDate.format('YYYY-MM-DD'),
                UserID: this.state.UserID,
                State: this.state.State,           
                Note: this.state.Note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        autoFocus 
                        value={this.state.Title} 
                        onChange={this.onTitleChange}
                    />
                    <DateRangePicker
                        startDate={this.state.StartDate}
                        startDateId="startDate"
                        endDate={this.state.EndDate}
                        endDateId="endDate"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        withPortal
                    />
                    <textarea
                        placeholder="Add a note for your journey (optional)"
                        value={this.state.Note}
                        onChange={this.onNoteChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(JourneyForm)