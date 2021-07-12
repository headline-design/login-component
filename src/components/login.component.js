import React, { Component } from "react";
import {Form, Input, Heading, Button, Checkbox} from 'pipeline-ui';

export default class Login extends Component {
    render() {
        return (
            <div align="center">
            <Form >

                <Heading>Log in</Heading>

                <div className="Form-group">
                    <Input type="email" className="Form-control" placeholder="Enter email" />
                </div>

                <div className="Form-group">
                    <Input type="password" className="Form-control" placeholder="Enter password" />
                </div>

                <div className="Form-group">
                <Checkbox defaultChecked label="Remember Me" required={true} />
                </div>
                <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
            </Form>
            </div>
        );
    }
}
