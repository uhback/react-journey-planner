import React, { Component } from 'react';
import { Button, Form, Input, Header, Icon } from 'semantic-ui-react'
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

export default class SignInForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            UserAccount: '',
            Password: '',
            NickName: '',
            State: 'A',
            error: ''
        }
    }
    onUserAccountChange = (e) => {
        const UserAccount = e.target.value;
        this.setState(() => ({ UserAccount }));
    }
    onPasswordChange = (e) => {
        const Password = e.target.value;
        this.setState(() => ({ Password }));
    }
    onNickNameChange = (e) => {
        const NickName = e.target.value;
        this.setState(() => ({ NickName }));
    }

    onCheckId = () => {
        console.log('Check Id');
    }
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state.UserAccount);
    //     if (this.state.UserAccount && this.state.Password && this.state.NickName) {
    //         console.log('Error');
    //         this.setState(() => ({ error: 'Please fill in the all blanks'}));
    //     } else {
    //         console.log('Pass');
    //         this.setState(() => ({ error: '' }));
    //         this.props.onSubmit({
    //             UserAccount: this.state.UserAccount,
    //             Password: this.state.Password,
    //             NickName: this.state.NickName,
    //             State: this.state.State,
    //         })
    //     }
    // }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.UserAccount === '' || this.state.Password === '' || this.state.NickName === '') {
            this.setState(() => ({ error: 'Please fill the all blanks'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                UserAccount: this.state.UserAccount,
                Password: this.state.Password,
                NickName: this.state.NickName,
                State: this.state.State,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>ID</label>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Input
                                    type="text"
                                    placeholder="ID"
                                    value={this.state.userAccount}
                                    onChange={this.onUserAccountChange}
                                    autoFocus
                                    error
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Button secondary disabled floated='right'>Check</Button>
                            </Grid.Column>
                        </Grid>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>NickName</label>
                        <Input
                            type="NickName"
                            placeholder="NickName"
                            value={this.state.NickName}
                            onChange={this.onNickNameChange}
                        />
                    </Form.Field>
                    <Button primary>Save</Button>
                </Form>
            </div>
        )
    }
}