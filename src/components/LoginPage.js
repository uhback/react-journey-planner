import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { startLogin } from '../actions/auth';
import { startSetMyJourney } from '../actions/journies';
import { startSetSharedJournies } from '../actions/sharedJournies';

import { Container, Imag, Header } from 'semantic-ui-react';

class LoginPage extends React.Component {
    onSubmit = (auth) => {
        this.props.startLogin(auth).then(() => {
            this.props.startSetMyJourney()
        });
        this.props.startSetSharedJournies();        
    }
    render() {
        return (
            <div className="outer-container background-login">
                <div className="inner-container">
                    <div className="centered-container">
                        <div className="login-form">
                            <h1 style={{ color: 'white' }}>Journey Planner</h1>
                            <LoginForm
                                onSubmit={this.onSubmit} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
} 

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (auth) => dispatch(startLogin(auth)),
    startSetMyJourney: () => dispatch(startSetMyJourney()),
    startSetSharedJournies: () => dispatch(startSetSharedJournies())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);