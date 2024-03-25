import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'
import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1>Building stellar <br></br> websites for early <br></br> startups</h1>
                        <p>Welcome to a world of innovation and excellence! we're a transformative <br></br> experience tailored just for you.</p>
                        <div className="btns">
                            <button className='def'>View our work</button>
                            <button>View Pricing <FaArrowRight className='arrow'/></button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className='banner' src="../assets/banner.svg" alt="banner" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero