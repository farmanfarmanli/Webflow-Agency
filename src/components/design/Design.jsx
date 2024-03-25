import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './design.scss'

const Design = () => {
    return (
        <div className='design'>
            <div className="design-head">
                <span>Features</span>
                <h1>Design that solves<br></br> problems, one product at<br></br> a time</h1>
            </div>

            <Container>
                <Row >
                    <Col className='box' lg={3}>
                        <img src="../assets/connect.svg" alt="icon" />
                        <h5>Uses Client First</h5>
                        <p>Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et velit
                            aliquam sed faucib<br></br> turpis eu gravida mi. Pellentesque et<br></br> velit aliquam sed mi. </p>
                    </Col>
                    <Col className='box' lg={3}>
                        <img src="../assets/done.svg" alt="icon" />
                        <h5>Two Free Revision Round</h5>
                        <p>Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et velit
                            aliquam sed faucib<br></br> turpis eu gravida mi. Pellentesque et<br></br> velit aliquam sed mi. </p>
                    </Col>
                    <Col className='box' lg={3}>
                        <img src="../assets/icon.svg" alt="icon" />
                        <h5>Template Customization</h5>
                        <p>Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et velit
                            aliquam sed faucib<br></br> turpis eu gravida mi. Pellentesque et<br></br> velit aliquam sed mi. </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='box' lg={3}>
                        <img src="../assets/quest.svg" alt="icon" />
                        <h5>24/7 Support</h5>
                        <p>Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et velit
                            aliquam sed faucib<br></br> turpis eu gravida mi. Pellentesque et<br></br> velit aliquam sed mi. </p>
                    </Col>
                    <Col className='box' lg={3}>
                        <img src="../assets/clock.svg" alt="icon" />
                        <h5>Quick Delivery</h5>
                        <p>Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et velit
                            aliquam sed faucib<br></br> turpis eu gravida mi. Pellentesque et<br></br> velit aliquam sed mi. </p>
                    </Col>
                    <Col className='box' lg={3}>
                        <img src="../assets/note.svg" alt="icon" />
                        <h5>Hands-on approach</h5>
                        <p>Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et velit
                            aliquam sed faucib<br></br> turpis eu gravida mi. Pellentesque et<br></br> velit aliquam sed mi. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Design