import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';

export class RegisterForm extends Component {
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
                         <Form.Label>First Name</Form.Label>
                         <Form.Control name="firstName" value={values.firstName} placeholder="Enter First Name" style={{ borderRadius: '53px' }} onChange={handleChange('firstName')} />
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Last Name</Form.Label>
                         <Form.Control name="lastName" value={values.lastName} placeholder="Enter Last Name" style={{ borderRadius: '53px' }} onChange={handleChange('lastName')} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" name="email" value={values.email} placeholder="Enter E-mail" style={{ borderRadius: '53px' }} onChange={handleChange('email')} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Enter Password" name="password" style={{ borderRadius: '53px' }} value={values.password} onChange={handleChange('password')} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                         <Form.Label>Confirm Password</Form.Label>
                         <Form.Control type="password" placeholder="Enter Confirm Password" name="password" style={{ borderRadius: '53px' }} value={values.password2} onChange={handleChange('password2')} />
                    </Form.Group>

                    <Form.Group>
                         <Form.Label>Contact No</Form.Label>
                         <Form.Control name="contact" value={values.contact} placeholder="Enter Contact No" style={{ borderRadius: '53px' }} onChange={handleChange('contact')} />
                    </Form.Group>

                    <Form.Group>
                         <Form.Label values={values.Gender}><b>Gender</b></Form.Label><br />
                         <Form.Check type="radio" inline name="Gender" value="male" onChange={handleChange('Gender')} />Male
                              <Form.Check type="radio" inline name="Gender" value="female" style={{ marginLeft: '15px' }} onChange={handleChange('Gender')} />Female
                         </Form.Group>
                    <div className="text-center">
                         <Button variant="primary" type="submit" onClick={this.continue} >Continue</Button>
                    </div>
               </Form>
          );
     }
}