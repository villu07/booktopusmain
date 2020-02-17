import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Container, NavItem, Button, NavDropdown } from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';
import { GiBookCover } from 'react-icons/gi';
//import { GoSearch } from 'react-icons/go';
import {
    NavLink, Redirect, BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom'
import './css/index.css';
import Logout from './Logout';
import store from './reduxStore';
import { LOGOUT_SUCCESS } from '../actions/types';
import { Login } from './Login';
import { login } from '../actions/authActions';
import { Home } from './Home';

export class Navbar1 extends Component {

    state = {
        token: null,
        logoutSuccess: false,
        firstName: '',
        lastName: '',
        email: ''
    }

    componentDidMount(e) {

        //        e.preventDefault();
        //this.state.firstName = store.getState().auth.user.first_name
        this.setState({
            firstName: store.getState().auth.first_name
        })
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

        else if (this.state.logoutSuccess === true) {
            return <Redirect to='/Login' />
        }

        const renderAuthButton = () => {
            if (token !== null) {
                /**
                 * User is logged in
                 */
                return (
                    <React.Fragment>
                        {/* <NavLink to="/" className="font1" style={{ marginRight: '30px', marginLeft: '300px', fontSize: "22px", marginTop: '5px' }}>Home</NavLink>
                        <NavLink to="/AboutUs" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px", marginTop: '5px' }}>About Us</NavLink>

                        <NavDropdown title={this.state.firstName} id="collasible-nav-dropdown" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px", marginTop: '5px' }}>
                            <NavDropdown.Item ><NavLink to="#" className="font1">Upload Book</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to="#" className="font1">Check History</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="#" className="font1">Edit Profile</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="#" className="font1" onClick={this.handelLogout}>Logout</NavLink ></NavDropdown.Item>
                        </NavDropdown> */}
                        <NavLink to="#" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>Home</NavLink>
                        <NavLink to="#" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>AboutUs</NavLink>
                        <NavDropdown title={this.state.firstName} className="font1">
                            <NavDropdown.Item >Upload Book</NavDropdown.Item>
                            <NavDropdown.Item >Upload Material</NavDropdown.Item>
                            <NavDropdown.Item >Upload Tools</NavDropdown.Item>
                            <NavDropdown.Item >Check History</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="#" className="font1" onClick={this.handelLogout}>Log Out</NavLink></NavDropdown.Item>
                        </NavDropdown>


                    </React.Fragment>

                );

            } else {

                /**
                 * User is not logged in
                 */
                return (

                    <React.Fragment>
                        {/* <NavLink to="/" className="font1" style={{ marginRight: '30px', marginLeft: '300px', fontSize: "22px", marginTop: '5px' }}>Home</NavLink>
                        <NavLink to="/AboutUs" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px", marginTop: '5px' }}>About Us</NavLink>

                        <NavDropdown title='More' id="collasible-nav-dropdown" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px", marginTop: '5px' }}>
                            <NavDropdown.Item ><NavLink to="#" className="font1">Upload Book</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to="#" className="font1">Check History</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="#" className="font1">Edit Profile</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/Login" className="font1">Log In</NavLink ></NavDropdown.Item>
                        </NavDropdown> */}
                        <NavLink to="#" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>Home</NavLink>
                        <NavLink to="#" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>AboutUs</NavLink>
                        <NavDropdown title="More" className="font1">
                            <NavDropdown.Item >Upload Book</NavDropdown.Item>
                            <NavDropdown.Item >Upload Material</NavDropdown.Item>
                            <NavDropdown.Item >Upload Tools</NavDropdown.Item>
                            <NavDropdown.Item >Check History</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/Login" className="font1">Log In</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </React.Fragment>
                );
            }
        }

        return (
            <div>
                {/* <Navbar className="navbar" expand="lg">
                    <Container fluid>
                        <GiOpenBook size="50px" style={{ marginRight: '10px', color: '#535758' }} />
                        <Navbar.Brand style={{ color: 'white', marginRight: '100px' }}>
                       <NavLink to="/" style={{ color: '#15181b', fontFamily: 'Oswald', fontWeight: 'bold' }}>BOOKTOPUS</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline >
                                <FormControl type="text" className="icon" placeholder="Search" style={{ borderRadius: '53px', marginRight: '10px' }} />

                            </Form>
                            <Nav className="ml-auto">
                                {renderAuthButton()}
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}
                <Navbar className="navbar" expand="lg">
                    <GiBookCover size="50px" className="font1" style={{ marginRight: '10px' }} />
                    <Navbar.Brand>
                        <NavLink to="/" className="font1" style={{ fontWeight: 'bold' }}>BOOKTOPUS</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <FormControl type="text" placeholder="Search" style={{ borderRadius: '53px', width: '300px' }} />
                            <Button variant="outline-success" style={{ borderRadius: '53px' }}>Search</Button>
                        </Form>
                        <Nav className="mr-auto">
                            {renderAuthButton()}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        )
    }
}
export default Navbar1