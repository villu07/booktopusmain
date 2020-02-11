import React, { Component } from 'react';
import { Forgot } from './Forgot';
import { Forgotcode } from './Forgotcode';
import { Table } from 'react-bootstrap'

export class Forgotpassword extends Component {
    state = {
        step: 1,

        // step 1
        Email: '',
        NewPassword: '',
        NewConfirmPassword: '',

        // step 2
        code: ''
    }
    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
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

    handleSubmit = (e) => {

        e.preventDefault();
    }

    showStep = () => {
        const { step, Email, NewPassword, NewConfirmPassword, code } = this.state;
        var values = { step, Email, NewPassword, NewConfirmPassword, code };
        if (step === 1)
            return (
                <Table bordered className="mt-5"
                    style={{ backgroundColor: '#e0e0e0', maxWidth: '400px', margin: 'auto', height: '100%' }}>
                    <td>
                        <Forgot
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} />
                    </td>
                </Table>
            );
        if (step === 2)
            return (
                <Table bordered className="mt-5"
                    style={{ backgroundColor: '#e0e0e0', maxWidth: '400px', margin: 'auto', height: '100%' }}>
                    <td>
                        <Forgotcode
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