import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './abouthero.scss'

const AboutHero = () => {
    return (
        <div className='about-hero'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <span>About us</span>
                        <h1>Our designs solve problems</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </Col>
                    <Col lg={6}>
                        <img src="./assets/group.svg" alt="group" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutHero