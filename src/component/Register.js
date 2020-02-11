import React, { Component } from 'react';
import { RegisterForm } from './RegisterForm';
import { ConfCode } from './ConfCode';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export class Register extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        contact: '',
        Gender: '',
        msg: null,

        // step 2
        code: ''
    }

    static propTypes = {
        // isAuthenticated: PropTypes.bool,
        // error: PropTypes.object.isRequired,
        // registerUser: PropTypes.func.isRequired
    }

    nextStep = () => {

        const { step } = this.state;
        //console.log(this.state);

        /** From here we will send email to the respected user */

        axios
            .post('/users/sendMail', {

                email: this.state.email
            })
            //.then(res => res.json())
            .then(res => {
                //console.log('in');
                const msg = res.data.msg;
                this.setState({
                    msg
                })
                alert(this.state.msg);

                this.setState({
                    step: step + 1
                });
            })
            .catch(err => {

                const msg = err.response.data.msg;

                this.setState({
                    msg
                })
                alert(this.state.msg);
            })

    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleSubmit = async (e) => {

        //e.preventDefault();
        // console.log(user.first_name + ' ' + user.last_name + ' ' + user.email + ' ' + user.password + ' ' + user.contact + ' ' + user.gender);

        /**
         * Register user using axios
         */
        try {
            await axios.post('/regAPI/register', {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                contact: this.state.contact,
                gender: this.state.Gender,
                code: this.state.code
            })
                .then((res, err) => {

                    //alert('Into right response');
                    if (err) throw err;
                    const msg = res.data.msg;
                    this.setState({
                        msg
                    })
                    alert(this.state.msg);
                    //<Link to="/"></Link>
                    // let path = `/`;
                    // useHistory().push(path);
                })
                .catch(err => {

                    const msg = err.response.data.msg;
                    this.setState({
                        msg
                    })
                    alert(this.state.msg);
                })

        }
        catch (e) {
            console.log(e.toString());
        }
    }

    showStep = () => {
        const { step, firstName, lastName, code, email, password, password2, Gender, contact } = this.state;
        var values = { step, firstName, lastName, code, email, password, password2, Gender, contact };
        if (step === 1)
            return (
                <Table bordered className="mt-5"
                    style={{ backgroundColor: '#e0e0e0', maxWidth: '400px', margin: 'auto', height: '100%' }}>
                    <td>
                        <RegisterForm
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </td>
                </Table>
            );
        if (step === 2)
            return (
                <Table bordered className="mt-5"
                    style={{ backgroundColor: '#e0e0e0', maxWidth: '400px', margin: 'auto', height: '100%' }}>
                    <td>
                        <ConfCode
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            values={values} />
                    </td>
                </Table>
            );
    }
    render() {

        return (
            <>
                {this.showStep()}
            </>
        );
    }
}