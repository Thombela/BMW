import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import '../scss/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function header( {count} ) {
  const navigate = useNavigate()

  const [state, setState] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <>
      <div id='header'>
          <Container>
              <Row>
                  <Col className='left'>
                    <Row>
                      <Col>
                        <img src='../src/assets/gallery/logo.svg' onClick={() => navigate('/')} />
                      </Col>
                      <Col>
                        <h1>
                          BMW
                        </h1>
                      </Col>
                    </Row>
                  </Col>
                  <Col className='right'>
                    <Dropdown>
                      <Dropdown.Toggle onClick={() => setState(!state)}>
                        <FontAwesomeIcon icon={faBars} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href='/About'>
                          About Us
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Cars
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Gallery
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Contact Us
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  {/*<div className={'menu '+(toggleMenu?'toggled':'')}>
                    <div className="item">
                      <h5 onClick={() => navigate('/About')}>About Us</h5>
                    </div>
                    <div className="item">
                      <h5 onClick={() => navigate('/Cars')}>Cars</h5>
                    </div>
                    <div className="item">
                      <h5 onClick={() => navigate('/Gallery')}>Gallery</h5>
                    </div>
                    <div className="item">
                      <h5 onClick={() => navigate('/Contact')}>Contact Us</h5>
                    </div>
  </div>*/}
                  <FontAwesomeIcon icon={toggleMenu?faXmark:faBarsStaggered} onClick={() => setToggleMenu(!toggleMenu)} />
                  </Col>
              </Row>
          </Container>
      </div>
    </>
  )
}
