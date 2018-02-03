import React, { Compoent } from 'react';
import moment from 'moment';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import uuid from 'uuid';
import 'react-dates/lib/css/_datepicker.css';

export default class JourneyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jourID: props.journey ? props.journey.jourID : uuid(),
            title: props.journey ? props.journey.title : '',
            note: props.journey ? props.journey.note : '',
            startDate: props.journey ? moment(props.journey.startDate) : moment(),
            endDate: props.journey ? moment(props.journey.endDate) : moment(),
            focusedInput: null,
            error: ''
        }
    }


    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onDatesChange = ({ startDate, endDate }) => {
           this.setState(() => ({ startDate, endDate }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title && this.state.startDate && this.state.endDate) {
            this.setState(() => ({ error: 'Please fill the all blanks'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                jourID: this.state.jourID,
                title: this.state.title,
                startDate: this.state.startDate.valueOf(), //UNIX TIMESTAMP
                endDate: this.state.endDate.valueOf(),
                note: this.state.note
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
                        value={this.state.title} 
                        onChange={this.onTitleChange}
                    />
                    <DateRangePicker
                        startDate={this.state.startDate}
                        startDateId="startDate"
                        endDate={this.state.endDate}
                        endDateId="endDate"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        withPortal
                    />
                    <textarea
                        placeholder="Add a note for your journey (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}