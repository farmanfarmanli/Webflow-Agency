import React from 'react'
import './testi.scss'
import { Container, Row, Col } from 'react-bootstrap';
import Swipe from '../swiper/Swipe';

const Testi = () => {
    return (
        <div className='testi'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={3} className='left-col'>
                        <h3>What our clients <br></br> say about us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </Col>
                    <Col lg={7}>
                        <Swipe/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testi