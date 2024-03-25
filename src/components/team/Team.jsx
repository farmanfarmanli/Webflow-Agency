import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './team.scss'


const Team = () => {
  return (
    <div className='team'>
      <Container>
        <h2>Meet Our Team</h2>
        <Row className='justify-content-center'>
          <Col lg={4} className='team-box'>
            <div className="img-box">
              <div className="imgs">
                <img src="./assets/black.svg" alt="serious" />
                <img src="./assets/Ellipse.svg" className='ellipse' alt="ellips" />
              </div>
              <div className="icon-box">
                <FaTwitter className='icon' />
                <FaFacebook className='icon' />
                <FaLinkedin className='icon' />
              </div>
            </div>
            <p>John Smith</p>
            <span>CEO</span>
          </Col>
          <Col lg={4} className='team-box'>
            <div className="img-box">
              <div className="imgs">
                <img src="./assets/serious.svg" alt="serious" />
                <img src="./assets/Ellipse.svg" className='ellipse' alt="ellips" />
              </div>
              <div className="icon-box">
                <FaTwitter className='icon' />
                <FaFacebook className='icon' />
                <FaLinkedin className='icon' />
              </div>
            </div>
            <p>Simon Adams</p>
            <span>STO</span>
          </Col>
          <Col lg={4} className='team-box'>
            <div className="img-box">
              <div className="imgs">
                <img src="./assets/nig.svg" alt="serious" />
                <img src="./assets/Ellipse.svg" className='ellipse' alt="ellips" />
              </div>
              <div className="icon-box">
                <FaTwitter className='icon' />
                <FaFacebook className='icon' />
                <FaLinkedin className='icon' />
              </div>
            </div>
            <p>Paul Jones</p>
            <span>Design Lead</span>
          </Col>
          <Col lg={4} className='team-box'>
            <div className="img-box">
              <div className="imgs">
                <img src="./assets/blonde.svg" alt="serious" />
                <img src="./assets/Ellipse.svg" className='ellipse' alt="ellips" />
              </div>
              <div className="icon-box">
                <FaTwitter className='icon' />
                <FaFacebook className='icon' />
                <FaLinkedin className='icon' />
              </div>
            </div>
            <p>Sara Hardin</p>
            <span>Project Manager</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Team