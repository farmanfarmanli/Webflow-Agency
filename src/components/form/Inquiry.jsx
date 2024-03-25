import React, { useState } from 'react'
import './inquiry.scss'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'

const Inquiry = () => {

    const [formData, setFormData] = useState({})

    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        try {
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                id: Math.random(),
                ...formData
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='inquiry'>
            <Container>
                <Row>
                    <Col lg={6} className='left'>
                        <div className='img-contain'>
                            <img src="../assets/writing.png" alt="writing" />
                            <div className='img-items'>
                                <h3>Building stellar websites for early startups</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et doloremagna aliqua ut enim.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='right'>
                        <div className='inq-top'>
                            <h3>Send Inquiry</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <div className='inq-bottom'>
                            <form id='register-form' onSubmit={(e) => e.preventDefault()}>
                                <input type="text" name='name' placeholder='Your Name' onChange={(e) => handleChange(e)} />
                                <input type="text" name='email' placeholder='Email' onChange={(e) => handleChange(e)} />
                                <input type="text" name='figma' placeholder='Paste your Figma design URL' onChange={(e) => handleChange(e)} />
                                <button onClick={() => handleSubmit()}>Send an inquiry</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Inquiry