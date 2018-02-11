import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JourneyList from './JourneyList';
import { startSetMyJourney } from '../actions/journies';

class JourneyDashboard extends React.Component {
    constructor(props){
        super(props);
            // 페이지 클릭시마다 호출됨 - 해결필요
            this.props.startSetMyJourney();
    }
    render() {        
        return (
            <div>
            <div>
                <Link to='/create'><button>+New Journey</button></Link>
            </div>
            <div>
                <JourneyList />
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetMyJourney: () => dispatch(startSetMyJourney())
})

export default connect(undefined, mapDispatchToProps)(JourneyDashboard);