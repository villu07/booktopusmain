import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container } from 'react-bootstrap';
import 'mdbreact/dist/css/mdb.css';
import logo from './image/123-01.png';

export class Footer extends Component {
     render() {
          return (
               <MDBFooter className="font-small pt-4 mt-4 footclr">
                    <Container>
                         <MDBRow>
                              <MDBCol md="4">
                                   <h5 className="title">BOOKTOPUS</h5>
                                   <p>
                                        You Can't Buy Happiness,But You Can Buy Books And That's Kind Of The Same Thing.
                         </p>
                              </MDBCol>

                              <MDBCol md="4">
                                   <h5 className="title" style={{ marginLeft: '40px' }}>About</h5>
                                   <ul>
                                        <li className="list-unstyled">
                                             <a href="#!">Devloper</a>
                                        </li>
                                        <li className="list-unstyled">
                                             <a href="#!">About Us</a>
                                        </li>
                                   </ul>
                              </MDBCol>
                              <MDBCol md="4">
                                   <h5 className="title" style={{ marginLeft: '40px' }}>Links</h5>
                                   <ul>
                                        <li className="list-unstyled">
                                             <a href="#!">Link 1</a>
                                        </li>
                                        <li className="list-unstyled">
                                             <a href="#!">Link 2</a>
                                        </li>
                                        <li className="list-unstyled">
                                             <a href="#!">Link 3</a>
                                        </li>
                                        <li className="list-unstyled">
                                             <a href="#!">Link 4</a>
                                        </li>
                                   </ul>
                              </MDBCol>
                              <img src={logo} alt="hello" className='footerimg' />
                         </MDBRow>
                    </Container>
                    <div className="footer-copyright text-center py-3">
                         <MDBContainer fluid>
                              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> BOOKTOPUS </a>
                         </MDBContainer>
                    </div>
               </MDBFooter>
          );
     }
}

export default Footer;