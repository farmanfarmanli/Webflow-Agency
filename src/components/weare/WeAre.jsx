import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './weare.scss'

const WeAre = () => {
    return (
        <div className='we'>
            <Container>
                <Row>

                    <Col lg={6}>
                        <span>Who we are</span>
                        <div className="boxes">
                            <h3>Goal focussed</h3>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="boxes">
                            <h3>Continuous improvement</h3>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>
                    <img src="/assets/board.svg" alt="board" />
                </Row>
            </Container>
        </div>
    )
}

export default WeAre