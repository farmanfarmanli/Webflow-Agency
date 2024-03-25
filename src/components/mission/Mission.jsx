import React from 'react'
import './mission.scss'
import { Container, Row, Col } from 'react-bootstrap';

const Mission = () => {
    return (
        <div className='mission'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <span>Our Mission</span>
                        <h3>Inspire, Innovate, Share</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col lg={5}>
                        <img src="./assets/standing.svg" alt="man" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={5}>
                        <img src="./assets/meeting.svg" alt="man" />
                    </Col>
                    <Col lg={5}>
                        <span>Our Vision</span>
                        <h3>Laser focus</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mission