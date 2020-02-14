import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Container, NavItem, Button } from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';
//import { GoSearch } from 'react-icons/go';
import { NavLink, Redirect } from 'react-router-dom'
import './css/index.css';
import Logout from './Logout';
import store from './reduxStore';
import { LOGOUT_SUCCESS } from '../actions/types';
import { Login } from './Login';

export class Navbar1 extends Component {

    state = {
        token: null,
        logoutSuccess: false
    }

    // componentDidMount() {
    //     this.state.token = store.getState().auth.token;
    // }

    handleLogin = e => {
        e.preventDefault();

        return (
            <Login />
        )
    }

    handleRegister = e => {
        e.preventDefault();
    }

    handelLogout = e => {
        //e.preventDefault();

        store.dispatch({
            type: LOGOUT_SUCCESS
        })

        this.setState({
            logoutSuccess: true
        })

        alert('You are successfully logged out !');
    }

    render() {

        const token = store.getState().auth.token;

        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }

        const renderAuthButton = () => {
            if (token !== null) {
                return <button onClick={this.handelLogout}>Logout</button>
            } else {
                //return <button onClick={this.handleLogin}>Login</button>
                return <NavLink to="/Login" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Login</NavLink>
                // <NavLink to="/Register" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Register</NavLink>
            }
        }

        return (
            <div>
                <Navbar className="navbar" expand="lg">
                    <Container fluid>
                        <GiOpenBook size="50px" style={{ marginRight: '10px', color: '#535758' }} />
                        <Navbar.Brand style={{ color: 'white', marginRight: '100px' }}>
                            <NavLink to="/" style={{ color: '#15181b', fontFamily: 'Oswald', fontWeight: 'bold' }}>BOOKTOPUS</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline >
                                <FormControl type="text" className="icon" placeholder="Search" style={{ borderRadius: '53px', marginRight: '10px' }} />
                                {/* <GoSearch size='30px' color='white' /> */}
                            </Form>
                            <Nav className="ml-auto">
                                {/* <NavLink to="/Logout" className="font1" onClick={this.handleLogout} style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Logout</NavLink> */}
                                {/* {token ? (
                                        // <button onClick={this.handelLogout}>Logout</button>
                                        //console.log('Logout')
                                        <Logout />
                                    ) : (
                                            // <button onClick={this.handleLogin}>Login</button>
                                            // <button onClick={this.handleRegister}>Register</button>
                                            //console.log('Login')
                                            <Loginbutton />
                                    )} */}

                                {renderAuthButton()}

                                {/* if({this.state.token}){
                                    return (
                                        <div>
                                    <NavLink to="/Logout" className="font1" onClick={this.handleLogout} style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Logout</NavLink>
                                    </div>
                                    //<Button onClick={this.handelClick}>Logout</Button>
                                );
                                    
                                }
                                else
                                {
                                    // <NavLink to="/Login" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Login</NavLink>
                                    // <NavLink to="/Register" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Register</NavLink>
                                    // <NavLink to="/About" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>About Us</NavLink>
                                } */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}
export default Navbar1