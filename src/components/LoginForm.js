import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'semantic-ui-react'

export default class LoginForm extends React.Component {
    state = {
        userAccount: '',
        password: '',
        errorID: '',
        errorPW: '',
    }
    onUserAccountChange = (e) => {
        const userAccount = e.target.value;
        this.setState(() => ({ userAccount }));
        this.setState(() => ({ errorID: ''}));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
        this.setState(() => ({ errorPW: ''}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.userAccount === '' ) {
            this.setState(() => ({ errorID: 'Put your ID'}));
        } else if (this.state.password === '') {
            this.setState(() => ({ errorPW: 'Put your Password'}));
        } else {
            this.setState(() => ({ errorID: ''}));
            this.setState(() => ({ errorPW: ''}));
            this.props.onSubmit({
                userAccount: this.state.userAccount,
                password: this.state.password
            })
        }
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        {this.state.errorID && <p style={{ color: 'red', textAlign:'left', fontWeight: 'bold' }}>{this.state.errorID}</p>}
                        <Input
                            type="text"
                            placeholder="ID"
                            value={this.state.userAccount}
                            onChange={this.onUserAccountChange}
                            autoFocus
                        />
                    </Form.Field>
                    <Form.Field>
                        {this.state.errorPW && <p style={{ color: 'red', textAlign:'left', fontWeight: 'bold' }}>{this.state.errorPW}</p>}
                        <Input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </Form.Field>
                    <Button secondary fluid>Login</Button>
                </Form>
                <div style={{ paddingTop: '15px'}}>
                    <Link to='/signin'><Button primary floated='right'>Sign-in</Button></Link>
                </div>
            </div>
        )
    }
}