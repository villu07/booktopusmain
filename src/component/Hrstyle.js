import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FaGripLinesVertical } from 'react-icons/fa';
import { GiOpenBook, GiBookshelf } from 'react-icons/gi';
import { TiCalculator } from 'react-icons/ti';
import './css/index.css';

export class Hrstyle extends Component {
    render() {
        return (
            <div>
                <Container>
                    <hr />
                    <p className="textsize" style={{ color: '#1b1e20' }}>
                        <a href='Book' style={{ color: '#1b1e20' }}><GiOpenBook style={{ marginRight: '1%' }} />
                            BOOKS</a>
                        <FaGripLinesVertical style={{ marginLeft: '1%', marginRight: '1%' }} />
                        <a href='material' style={{ color: '#1b1e20' }}><GiBookshelf style={{ marginRight: '1%' }} />
                            MATERIAL</a>
                        <FaGripLinesVertical style={{ marginLeft: '1%', marginRight: '1%' }} />
                        <a href='tools' style={{ color: '#1b1e20' }}><TiCalculator style={{ marginRight: '1%' }} />
                            TOOLS</a>
                    </p>
                    <hr />
                </Container>
            </div>
        )
    }
}