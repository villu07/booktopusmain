import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Container, NavDropdown, Button, Row } from 'react-bootstrap';
import { GiBookCover } from 'react-icons/gi';
import { NavLink } from 'react-router-dom'
import './css/index.css';

export class Navbar2 extends Component {
    render() {
        return (
            <div>
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
                        {/* <Nav className="mr-auto">
                            <NavLink to="#" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>Home</NavLink>
                            <NavLink to="#" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>Link</NavLink>
                            <NavDropdown title="Dropdown" className="font1">
                                <NavDropdown.Item >Upload Book</NavDropdown.Item>
                                <NavDropdown.Item >Upload Material</NavDropdown.Item>
                                <NavDropdown.Item >Upload Tools</NavDropdown.Item>
                                <NavDropdown.Item >Check History</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Log In</NavDropdown.Item>
                            </NavDropdown>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }
}
// className = "ml-auto"

// className = "mr-auto"