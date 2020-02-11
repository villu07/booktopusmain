import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, CardGroup, Col, Row, Button } from 'react-bootstrap';
import card1front from './image/card1front.jpg';
import card1back from './image/card1back.jpg';
import card2front from './image/card2front.jpg';
import card2back from './image/card2back.jpg';
import card3front from './image/card3front.jpg';
import card3back from './image/card3back.jpg';
import card4front from './image/card4front.jpg';
import card4back from './image/card4back.jpg';
import './css/index.css';
export class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CardGroup>
                        <Row>
                            <Col sm={3}>
                                <Card className='card'>
                                    <Card.Img variant="top" src={card1front} className="cardimage" />
                                    <Card.Body className='opct'>
                                        <Card.Title>C++</Card.Title>
                                        <Card.Text>
                                            Subject Code: 215002<br />
                                            Semister :4th<br />
                                            Author : Balaguruswami
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card>
                                    <Card.Img variant="top" src={card1back} />
                                    <Card.Body>
                                        <Card.Title>Java</Card.Title>
                                        <Card.Text>
                                            Subject Code: 215003<br />
                                            Semister :5th<br />
                                            Author : Fenil Jariwala
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card>
                                    <Card.Img variant="top" src={card2front} />
                                    <Card.Body>
                                        <Card.Title>DBMS</Card.Title>
                                        <Card.Text>
                                            Subject Code: 215001<br />
                                            Semister :3th<br />
                                            Author : Abhi Waghela
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card>
                                    <Card.Img variant="top" src={card2back} />
                                    <Card.Body>
                                        <Card.Title>EEE</Card.Title>
                                        <Card.Text>
                                            Subject Code: 215004<br />
                                            Semister :1th<br />
                                            Author : Vishal Jariwala
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={3}>
                                <Card>
                                    <Card.Img variant="top" src={card3front} />
                                    <Card.Body>
                                        <Card.Title>Design of steel structures</Card.Title>
                                        <Card.Text>
                                            Subject Code: 215275<br />
                                            Semister :7th<br />
                                            Author : Ruchit Mavani
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card>
                                    <Card.Img variant="top" src={card3back} />
                                    <Card.Body>
                                        <Card.Title>Machinery’s Handbook</Card.Title>
                                        <Card.Text>
                                            Subject Code: 221575<br />
                                            Semister :8th<br />
                                            Author : Hiren Ramni
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card>
                                    <Card.Img variant="top" src={card4front} />
                                    <Card.Body>
                                        <Card.Title>Signals And System</Card.Title>
                                        <Card.Text>
                                            Subject Code: 210057<br />
                                            Semister :5th<br />
                                            Author : Dhawani Patel
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card>
                                    <Card.Img variant="top" src={card4back} />
                                    <Card.Body>
                                        <Card.Title>Maths - 3</Card.Title>
                                        <Card.Text>
                                            Subject Code: 210457<br />
                                            Semister :3th<br />
                                            Author : Devang Mamnawala
                                                <Button id='buttoncolor'>Request</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </CardGroup >
                </Container>
            </div >
        )
    }
}

