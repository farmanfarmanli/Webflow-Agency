import React from 'react'
import './howwork.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom";


const HowWork = () => {
    return (
        <div className='work'>
            <Container>
                <Row>
                    <Col lg={5} className='line'>
                        <h2>How we work</h2>
                        <p>Webflow - Where Innovation Meets Perfection. <br></br> Your journey to excellence starts here!</p>
                        <Link className='link' to='/about'>Get in touch with us <FaArrowRight className='arrow' /></Link>
                    </Col>
                    <Col lg={7}>
                        <Container>
                            <Row className='line'>
                                <Col lg={6}>
                                    <img src="../assets/firstp.svg" alt="pointer" />
                                    <h3>Strategy</h3>
                                    <p>Revolutionize your online presence with our strategic solutions at Webflow</p>
                                </Col>
                                <Col lg={6}>
                                    <img src="../assets/secondp.svg" alt="pointer" />
                                    <h3>Wireframing</h3>
                                    <p>We listen, understand, and go the extra mile to exceed your expectations.</p>
                                </Col>
                            </Row>
                            <Row className='line'>
                                <Col lg={6}>
                                    <img src="../assets/third.svg" alt="pointer" />
                                    <h3>Design</h3>
                                    <p>From design to engagement, we craft a winning strategy tailored to elevate your brand.</p>
                                </Col>
                                <Col lg={6}>
                                    <img src="../assets/fourth.svg" alt="pointer" />
                                    <h3>Development</h3>
                                    <p>Explore our website and unlock a world of possibilities. Your journey to excellence starts here! </p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowWork