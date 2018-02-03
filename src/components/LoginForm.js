import React, { Component } from 'react';

export default class LoginForm extends React.Component {
    state = {
        userAccount: '',
        password: ''
    }
    onUserAccountChange = (e) => {
        const userAccount = e.target.value;
        this.setState(() => ({ userAccount }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            userAccount: this.state.userAccount,
            password: this.state.password
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="ID"
                        value={this.state.userAccount}
                        onChange={this.onUserAccountChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}