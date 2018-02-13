import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { startLogin } from '../actions/auth';
import { startSetMyJourney } from '../actions/journies';


class LoginPage extends React.Component {
    onSubmit = (auth) => {
        this.props.startLogin(auth).then(() => {
            this.props.startSetMyJourney()
        })
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <LoginForm
                    onSubmit={this.onSubmit} />
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
    startSetMyJourney: () => dispatch(startSetMyJourney())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);