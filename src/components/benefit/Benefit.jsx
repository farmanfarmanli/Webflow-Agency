import React from 'react'
import './benefit.scss'
import { Container, Row, Col } from 'react-bootstrap';
import SwipeIcon from '../swiperIcon/SwipeIcon';
import Benefits from '../benefitboxes/Benefits';

const Benefit = () => {
    return (
        <div className='benefit'>
            <Container>
                <Row>
                    <Benefits />
                </Row>
                <Row>
                    <SwipeIcon />
                </Row>
            </Container>
        </div>
    )
}

export default Benefit