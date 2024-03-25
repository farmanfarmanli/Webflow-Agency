import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'
import './blogs.scss'

const Blogs = () => {
  return (
    <div className='blogs'>
      <Container>
        <div className='blog-head'>
          <h2>Our Blog</h2>
        </div>
        <Row>
          <Col lg={4} className='box'>
            <img src="../assets/arabic.svg" alt="man" />
            <span>19 Jan 2022</span>
            <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <span className='link-span' href="#">Read More <FaArrowRight className='arrows' /></span>
          </Col>
          <Col lg={4} className='box'>
            <img src="../assets/woman.svg" alt="man" />
            <span>19 Jan 2022</span>
            <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <span className='link-span' href="#">Read More <FaArrowRight className='arrows' /></span>
          </Col>
          <Col lg={4} className='box'>
            <img src="../assets/monitors.svg" alt="man" />
            <span>19 Jan 2022</span>
            <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <span className='link-span' href="#">Read More <FaArrowRight className='arrows' /></span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blogs