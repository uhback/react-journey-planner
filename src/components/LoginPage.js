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
            <div>              
                <div className="background-login">
                    <Header as='h1' color='black'>Journey Planner</Header>                                                
                    <div className="img-bg-cover">
                        <div className="container-login">
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