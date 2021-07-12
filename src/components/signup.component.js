import React, { Component } from "react";
import {Form, Text, Heading, Input, Button} from 'pipeline-ui';

export default class SignUp extends Component {
    render() {
        return (<div align="center">
            <Form>
                <Heading>Register</Heading>

                <div className="Form-group">
                    <Input type="text" className="Form-control" placeholder="First name" />
                </div>

                <div className="Form-group">
                    <Input type="text" className="Form-control" placeholder="Last name" />
                </div>

                <div className="Form-group">
                    <Input type="email" className="Form-control" placeholder="Enter email" />
                </div>

                <div className="Form-group">
                    <Input type="password" className="Form-control" placeholder="Enter password" />
                </div><br></br>

                <Button type="submit" className="btn btn-dark btn-lg btn-block">Register</Button>
            </Form>
            </div>
        );
    }
}