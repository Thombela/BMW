import React, { useState } from 'react'
import '../scss/footer.scss'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function footer() {
  const navigate = useNavigate()

  const [showAbout, setShowAbout] = useState(false)
  return (
    <div id='footer'>
      <Modal show={showAbout} onHide={() => setShowAbout(false)} className='about'>
        <Modal.Body>
          <div className="about">
            <div className="image-container">
              <img src="./src/assets/gallery/about.jpg" alt="" />
              <div className="close-button" onClick={() => setShowAbout(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <div className="info">
              <div className="heading">
                <h1>About Us</h1>
              </div>
              <div className="text">
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
                </p><p>
                In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien.
                </p><p>
                Donec ut est in lectus consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique. Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis.
                </p><p>
                Pellentesque porttitor, velit lacinia egestas auctor, diam eros tempus arcu, nec vulputate augue magna vel risus. Cras non magna vel ante adipiscing rhoncus. Vivamus a mi. Morbi neque. Aliquam erat volutpat. Integer ultrices lobortis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin semper, ante vitae sollicitudin posuere, metus quam iaculis nibh, vitae scelerisque nunc massa eget pede. Sed velit urna, interdum vel, ultricies vel, faucibus at, quam. Donec elit est, consectetuer eget, consequat quis, tempus quis, wisi.
                </p><p>
                In in nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec ullamcorper fringilla eros. Fusce in sapien eu purus dapibus commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras faucibus condimentum odio. Sed ac ligula. Aliquam at eros. Etiam at ligula et tellus ullamcorper ultrices. In fermentum, lorem non cursus porttitor, diam urna accumsan lacus, sed interdum wisi nibh nec nisl.
                </p><p>
                Ut tincidunt volutpat urna. Mauris eleifend nulla eget mauris. Sed cursus quam id felis. Curabitur posuere quam vel nibh. Cras dapibus dapibus nisl. Vestibulum quis dolor a felis congue vehicula. Maecenas pede purus, tristique ac, tempus eget, egestas quis, mauris. Curabitur non eros. Nullam hendrerit bibendum justo. Fusce iaculis, est quis lacinia pretium, pede metus molestie lacus, at gravida wisi ante at libero.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Container>
        <Row>
          <Col>
            <h3>Store + Gallery</h3>
            <p>Digital Store</p>
            <p onClick={() => navigate('/Gallery')}>Online Gallery</p>
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
            <p onClick={() => setShowAbout(true)} >About Us</p>
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
