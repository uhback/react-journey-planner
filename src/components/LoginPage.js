import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { startLogin } from '../actions/auth';
import { startSetMyJourney } from '../actions/journies';

import { Container, Image } from 'semantic-ui-react';

class LoginPage extends React.Component {
    onSubmit = (auth) => {
        this.props.startLogin(auth).then(() => {
            this.props.startSetMyJourney()
        })
    }
    render() {
        return (
            <div>
                <div className="img-bg-login">
                    <Image src='../../images/loginbg.jpg' className="img-bg-login"/>
                </div>
                <div className="container-login">
                    <LoginForm
                        onSubmit={this.onSubmit} />
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
    startSetMyJourney: () => dispatch(startSetMyJourney())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);