import React, { useState } from 'react'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'
import '../scss/index.scss'
import { Col, Row } from 'react-bootstrap'

export default function Index() {
  return (
    <div id="index" >
      <Header  />
      <div className="welcome-image">
        <img src='./src/assets/gallery/m3-all.jpg' />
        <h1>
          German Engineering
        </h1>
        <h2>
          Where perfect driving meets perfect engineering.
        </h2>
      </div>
      <div className="gallery">
        <Row>
          <Col>
            <div className="car">
              <img src='./src/assets/gallery/i8.webp' className='i8'/>
            </div></Col>
          <Col>
        <div className="car">
          <img src='./src/assets/gallery/m3-g80.jpg'/>
        </div>
        </Col>
          <Col>
        <div className="car">
          <img src='./src/assets/gallery/m4-csl.webp'/>
        </div>
        </Col>
          <Col>
        <div className="car">
          <img src='./src/assets/gallery/x5.webp'/>
        </div>
        </Col>
          <Col>
        <div className="car">
          <img src='./src/assets/gallery/z4.jpg'/>
        </div>
        </Col>
          <Col>
        <div className="car">
          <img src='./src/assets/gallery/m5cs-1.jpg'/>
        </div>
        </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}
