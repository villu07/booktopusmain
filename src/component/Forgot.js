import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';

export class Forgot extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <Form style={{ marginTop: '2%', marginLeft: '5%', marginRight: '5%' }}>
                <div className="text-center mt-3 mb-3"><GiOpenBook size="50px" color="black" /></div>
                <h2 className='text-center' style={{ fontFamily: 'Verdana', marginBottom: '20px' }}>BOOKTOPUS</h2>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="Email" type="email" value={values.Email} placeholder="Enter Email" style={{ borderRadius: '53px' }} onChange={handleChange('Email')} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control name="password" type="password" value={values.NewPassword} placeholder="Enter New Password" style={{ borderRadius: '53px' }} onChange={handleChange('NewPassword')} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>New Confirm Password</Form.Label>
                    <Form.Control type="password" name="newconfirmpassword" value={values.NewConfimPassword} placeholder="Enter New Confirm Password" style={{ borderRadius: '53px' }} onChange={handleChange('NewConfimPassword')} />
                </Form.Group>

                <div className="text-center">
                    <Button variant="primary" type="submit" onClick={this.continue} >Continue</Button>
                </div>
            </Form>
        );
    }
}