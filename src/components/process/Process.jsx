import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './process.scss'

const Process = () => {
    return (
        <div className='process'>
            <Container>
                <h2>The process we follow</h2>
                <Row>
                    <Col lg={3}>
                        <div className='process-line'>
                            <img className='circle' src="./assets/circle.svg" alt="circle" />
                            <img className='line' src="./assets/line.svg" alt="line" />
                        </div>
                        <div className="process-text">
                            <h5>Planning</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='process-line'>
                            <img className='circle' src="./assets/circle.svg" alt="circle" />
                            <img className='line' src="./assets/line.svg" alt="line" />
                        </div>
                        <div className="process-text">
                            <h5>Conception</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='process-line'>
                            <img className='circle' src="./assets/circle.svg" alt="circle" />
                            <img className='line' src="./assets/line.svg" alt="line" />
                        </div>
                        <div className="process-text">
                            <h5>Design</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='process-line'>
                            <img className='circle' src="./assets/circle.svg" alt="circle" />
                            <img className='line' src="./assets/line.svg" alt="line" />
                        </div>
                        <div className="process-text">
                            <h5>Development</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Process