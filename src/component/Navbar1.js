import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Container } from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';
//import { GoSearch } from 'react-icons/go';
import { NavLink } from 'react-router-dom'
import './css/index.css';

export class Navbar1 extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar" expand="lg">
                    <Container fluid>
                        <GiOpenBook size="50px" style={{ marginRight: '10px', color: "#e55400" }} />
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
                                <NavLink to="/Login" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Login</NavLink>
                                <NavLink to="/Register" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>Register</NavLink>
                                <NavLink to="/About" className="font1" style={{ marginRight: '30px', marginLeft: '5px', fontSize: "22px" }}>About Us</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}
export default Navbar1