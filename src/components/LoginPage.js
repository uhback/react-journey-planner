import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { startLogin } from '../actions/auth';


class LoginPage extends React.Component {
    onSubmit = (auth) => {
        this.props.startLogin(auth)
        //this.props.history.push('/dashboard');
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
    startLogin: (auth) => dispatch(startLogin(auth))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);