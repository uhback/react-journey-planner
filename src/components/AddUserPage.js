import React from 'react';
import { connect } from 'react-redux';
import SignInForm from './SignInForm';
import { startAddUser } from '../actions/auth';
import { Header, Icon } from 'semantic-ui-react';

class AddUserPage extends React.Component {
    onSubmit = (user) => {
        this.props.startAddUser(user);
        alert('Now, You can log-in!');
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="outer-container">
                <div className="inner-container">
                    <div className="container-signin-form">
                        <Header as='h2' icon textAlign='center' color='black'>
                            <Icon name='user' />
                            <Header.Content>
                            Sign-In
                            </Header.Content>
                        </Header>
                        <SignInForm
                            onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startAddUser: (user) => dispatch(startAddUser(user)),
})
export default connect(undefined, mapDispatchToProps)(AddUserPage);