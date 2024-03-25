import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom";
import './footer.scss'

const Footer = () => {
  return (
    <>
      <div className='footer-up'>
        <Container>
          <Row>
            <Col lg={6} className='footer-left'>
              <img src="../assets/logo.svg" alt="logo" />
              <p>We are always open to discuss your project and improve your online presence.</p>
              <div className='footer-elements'>
                <div className="left-element">
                  <h5>Email me at</h5>
                  <span>contact@website.com</span>
                </div>
                <div className="right-element">
                  <h5>Call us</h5>
                  <span>0927 6277 28525</span>
                </div>
              </div>
            </Col>
            <Col lg={6} className='footer-right'>
              <h1>Lets Talk!</h1>
              <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
              <div className="icon-flex">
                <FaFacebook className='fb' />
                <FaTwitter className='tw' />
                <FaYoutube className='yt' />
                <FaLinkedin className='lk' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-down">
        <Container>
          <Row>
            <Col lg={6} className="left">
              <span>Copyright 2021, Finsweet.com</span>
            </Col>
            <Col lg={6} className="right">
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/about'>About Us</Link>
              <Link className='link' to='/feature'>Feature</Link>
              <Link className='link' to='/feature'>FAQ</Link>
              <Link className='link' to='/blog'>Blog</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer