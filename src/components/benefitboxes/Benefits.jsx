import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './benefits.scss'

const Benefits = () => {
    return (
        <div className='benefits'>
            <Container>
                <h2>The benefits of working<br></br> with our team</h2>
                <Row>
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
            </Container>
        </div>
    )
}

export default Benefits