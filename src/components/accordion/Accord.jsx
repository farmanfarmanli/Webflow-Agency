import React from 'react'
import './accordion.scss'
import { Container, Row, Col, AccordionItem, Accordion, AccordionBody, AccordionHeader } from 'react-bootstrap';

const Accord = () => {
    return (
        <div className='accord'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={3}>
                        <h3>Frequently asked questions</h3>
                        <a href="#">Contact us for more info</a>
                    </Col>
                    <Col lg={7}>
                        <Accordion defaultActiveKey={0} flush>
                            <AccordionItem eventKey='0'>
                                <AccordionHeader>
                                    <h5><a className='numb'>01</a>How much time does it take?</h5>
                                </AccordionHeader>
                                <AccordionBody>
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem eventKey='1'>
                                <AccordionHeader>
                                    <h5><a className='numb'>02</a>What is your class naming convention?</h5>
                                </AccordionHeader>
                                <AccordionBody>
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem eventKey='2'>
                                <AccordionHeader>
                                    <h5><a className='numb'>03</a>How do you communicate?</h5>
                                </AccordionHeader>
                                <AccordionBody>
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem eventKey='3'>
                                <AccordionHeader>
                                    <h5><a className='numb'>04</a>I have a bigger project. Can you handle it?</h5>
                                </AccordionHeader>
                                <AccordionBody>
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem eventKey='4'>
                                <AccordionHeader>
                                    <h5><a className='numb'>05</a>What is your class naming convention?</h5>
                                </AccordionHeader>
                                <AccordionBody>
                                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.                                </AccordionBody>
                            </AccordionItem>

                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Accord