import React from 'react'
import './clients.scss'
import { Container, Row, Col } from 'react-bootstrap';

const Clients = () => {
    return (
        <>
            <div className='clients'>

                <div className="white-client">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <span>Use Client-first</span>
                                <h4>Top agencies and freelancers around the world use<br></br> Client-first</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                            <Col lg={4}>
                                <img src="./assets/psychologist.svg" alt="book" />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="gray-client">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <img src="./assets/bookman.svg" alt="book" />
                            </Col>
                            <Col lg={6}>
                                <span>Free Revision Rounds</span>
                                <h4>Get free Revisions and one week of free maintenance</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="white-client">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <span>24/7 Support</span>
                                <h4>Working with us, you will be getting 24/7 priority support</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                            <Col lg={4}>
                                <img src="./assets/callcenter.svg" alt="book" />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="gold-client">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <img src="./assets/macbook.svg" alt="book" />
                            </Col>
                            <Col lg={6}>
                                <span>Quick Delivery</span>
                                <h4>Guranteed 1 week delivery for standard five pager website</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Clients