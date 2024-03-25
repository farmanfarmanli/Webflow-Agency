import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'
import './feat.scss'

const FeatHero = () => {
    return (
        <div className='feat'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1>All the features<br></br> you need</h1>
                        <p>Welcome to a world of innovation and excellence! we're a transformative <br></br> experience tailored just for you.</p>
                        <div className="btns">
                            <button>View Pricing <FaArrowRight className='arrow' /></button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className='banner' src="../assets/featureHero.svg" alt="banner" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FeatHero