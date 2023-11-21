import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../scss/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function header( {count} ) {

  const [refresh, setRefresh] = useState(0)
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <div id='header'>
          <Container>
              <Row>
                  <Col className='left'>
                    <Row>
                      <Col>
                        <img src='src/assets/gallery/logo.svg' />
                      </Col>
                      <Col>
                        <h1>
                          BMW
                        </h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col className='right'>
                  <div className={'menu '+(toggleMenu?'toggled':'')}>
                    <div className="item">
                      <h5>About Us</h5>
                    </div>
                    <div className="item">
                      <h5>Cars</h5>
                    </div>
                    <div className="item">
                      <h5>Gallery</h5>
                    </div>
                    <div className="item">
                      <h5>Contact Us</h5>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={toggleMenu?faXmark:faBarsStaggered} onClick={() => setToggleMenu(!toggleMenu)} />
                  </Col>
              </Row>
          </Container>
      </div>
    </>
  )
}
