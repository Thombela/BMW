import React from 'react'
import '../scss/footer.scss'
import { Col, Container, Row } from 'react-bootstrap'


export default function footer() {
  return (
    <div id='footer'>
      <Container>
        <Row>
          <Col>
            <h3>Store + Gallery</h3>
            <p>Digital Store</p>
            <p>Online Gallery</p>
            <p></p>
          </Col>
          <Col>
            <h3>BMW Services</h3>
            <p>Service Your Car</p>
            <p>Rent A Car</p>
            <p>Owner's Portal</p>
          </Col>
          <Col>
            <h3>About BMW</h3>
            <p>About Us</p>
            <p>Conact Us</p>
            <p></p>
          </Col>
          <Col>
            <h3> Own A BMW</h3>
            <p>BMW Dealerships</p>
            <p>Build Your BMW</p>
            <p>Pre-owned</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
