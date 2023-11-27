import React, { useState } from 'react'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'
import '../scss/index.scss'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()
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
              <h4>i8</h4>
              <img src='./src/assets/gallery/i8.webp' className='i8'/>
              <div className="parent-buttons">
                <div className="button">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='blue' />
                  Build Your Own
                </div>
                <div className="red-button">
                  <FontAwesomeIcon icon={faChevronRight} />
                  All Models
                </div>
              </div>
            </div></Col>
          <Col>
            <div className="car">
              <h4>m3 G80</h4>
              <img src='./src/assets/gallery/m3-g80.jpg'/>
              <div className="parent-buttons">
                <div className="button">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Build Your Own
                </div>
                <div className="red-button" onClick={() => navigate('/Modals/M3')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  All Models
                </div>
              </div>
            </div>
          </Col>
            <Col>
            <div className="car">
              <h4>M4 CSL</h4>
              <img src='./src/assets/gallery/m4-csl.webp'/>
              <div className="parent-buttons">
                <div className="button">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Build Your Own
                </div>
                <div className="red-button">
                  <FontAwesomeIcon icon={faChevronRight} />
                  All Models
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
            <Col>
            <div className="car">
              <h4>X5</h4>
              <img src='./src/assets/gallery/x5.webp'/>
              <div className="parent-buttons">
                <div className="button">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Build Your Own
                </div>
                <div className="red-button">
                  <FontAwesomeIcon icon={faChevronRight} />
                  All Models
                </div>
              </div>
            </div>
          </Col>
              <Col>
            <div className="car">
              <h4>Z4</h4>
              <img src='./src/assets/gallery/z4.jpg'/>
              <div className="parent-buttons">
                <div className="button">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Build Your Own
                </div>
                <div className="red-button">
                  <FontAwesomeIcon icon={faChevronRight} />
                  All Models
                </div>
              </div>
            </div>
          </Col>
            <Col>
            <div className="car">
              <h4>M5 Cs</h4>
              <img src='./src/assets/gallery/m5cs-1.jpg'/>
              <div className="parent-buttons">
                <div className="button">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Build Your Own
                </div>
                <div className="red-button" onClick={() => navigate('/Modals/M5')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  All Models
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="news">
        <div className="article">
          <div className="image">
            <img src="./src/assets/gallery/news1.jpg" alt="" />
          </div>
          <h5>BMW Ranked 10th In Best Global Brands 2023 Study</h5>
          <div className="info">
            <p>It’s that time of the year for Interbrand to release its Best Global Brands study, and the 2023 edition observes the rising value of some automakers. For the first time ever, BMW managed to enter the top 10, after its value increased by 10% to $51,157 million. However, that wasn’t enough to be the winner in the automotive segment as Toyota finished sixth overall, right ahead of Mercedes.</p>
          </div>
        </div>
        <div className="article">
          <div className="image">
            <img src="./src/assets/gallery/news2.webp" alt="" />
          </div>
          <h5>Gusheshe BMW E30 Spontaneously Combusts in Mzansi Street</h5>
          <div className="info">
            <p>You don’t fully appreciate something until it’s gone, and the owner of this BMW E30 that spontaneously went up in flames felt that in droves as his Gusheshe went up in flames in front of his eyes. </p>
          </div>
        </div>
        <div className="article">
          <div className="image">
            <img src="./src/assets/gallery/news3.webp" alt="" />
          </div>
          <h5>BMW’s M Performance Parts Kit Now Includes Centre-lock Wheels</h5>
          <div className="info">
            <p>Centre-lock wheels are more often than not utilised on the vehicles used in various motorsports, such as the GT World Challenge and Formula 1. The purpose of these wheels is to allow for quicker wheel changes during pitstops but also help reduce the wheel rotating mass, allow for larger brakes (as a result of more clearance), and, if installed correctly, are stronger than an average wheel. The centre-lock wheels offered for BMW’s M cars are forged Y-spoke wheels, which are 19-inch wheels at the front and 20-inch wheels at the rear. The front wheels are wrapped in 275/35 ZR19 tyres, and the rear wheels are wrapped in 285/30 ZR20 tyres.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
