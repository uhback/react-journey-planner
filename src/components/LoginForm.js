import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

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
    }
    render() {
        return (
            <div className="form-login">
                <h1>Journey Planner</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <Input
                            type="text"
                            placeholder="ID"
                            value={this.state.userAccount}
                            onChange={this.onUserAccountChange}
                            autoFocus
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </Form.Field>
                    <Button secondary fluid>Login</Button>
                </Form>
            </div>
        )
    }
}