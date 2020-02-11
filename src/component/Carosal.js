import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import corosal1 from './image/corosal1.jpeg';
import corosal2 from './image/corosal2.jpeg';
import corosal3 from './image/corosal3.jpeg';
import corosal4 from './image/corosal4.jpeg';
export class Carosal extends Component {
    render() {
        return (
            < div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={corosal1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={corosal2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={corosal3}
                            alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={corosal4}
                            alt="Forth slide" />

                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}