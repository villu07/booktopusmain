import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

export class Forgotcode extends Component {
    continue = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { code, handleChange } = this.props;
        return (
            <Form style={{ marginTop: '25px', marginLeft: '10px', marginRight: '10px' }}>
                <Form.Label>We have sent you an 6 digit code, <p>Please, Enter it below</p></Form.Label>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Enter 6-digit code</Form.Label>
                    <Form.Control name="code" type="password" onChange={handleChange('code')} value={code} placeholder="Code" />
                </Form.Group>
                <div className="text-center">
                    <Button variant="primary" type="submit" onClick={this.continue}>Submit</Button>
                    <Button variant="primary" type="submit" onClick={this.back}>Back</Button>
                </div>
            </Form>
        );
    }
}
