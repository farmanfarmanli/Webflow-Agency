import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom";
import './project.scss'

const Project = () => {
    return (
        <div className='project'>
            <Container>
                <div className='head-tag'>
                    <h2>View our project</h2>
                    <span>View more <FaArrowRight className='content-arrow' /></span>
                </div>
                <Row>
                    <Col lg={7} className='main'>
                        <div className="main-content">
                            <img src="./assets/Card.svg" alt="card" />
                            <div className="main-items">
                                <h4>Workhub office Webflow<br></br> Webflow Design</h4>
                                <p> From design to engagement, we craft a winning strategy tailored to elevate your brand.  </p>
                                <Link className='span' to='/about'>View project <FaArrowRight className='content-arrow' /></Link>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} className='side'>
                        <div className='side-content'>
                            <img src="./assets/cardsec.svg" alt="card" />
                            <div className="side-items">
                                <h4>Unisaas Website <br></br> Design</h4>
                                <Link className='span' to='/about'>View project <FaArrowRight className='content-arrow' /></Link>
                            </div>
                        </div>
                        <img src="./assets/cardth.svg" alt="card" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Project