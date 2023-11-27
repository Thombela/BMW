import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'
import '../scss/modals.scss'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modals() {
  const navigate = useNavigate()
  const { modal, car } = useParams()

  const [selectedModal, setSelectedModal] = useState(modal)
  const cars = ([
    {
      name: 'BMW E21',
      car: 'BMW-E21',
      image: 'bmw-E21.webp',
      modal: 'M3'
    },
    {
      name: 'BMW E36',
      car: 'BMW-E36',
      image: 'bmw-e36.webp',
      modal: 'M3'
    },
    {
      name: 'BMW E46',
      car: 'BMW-E46',
      image: 'bmw-e46.jpg',
      modal: 'M3'
    },
    {
      name: 'BMW E92',
      car: 'BMW-E92',
      image: 'bmw-e92.png',
      modal: 'M3'
    },
    {
      name: 'BMW F82',
      car: 'BMW-F82',
      image: 'bmw-f82.jpg',
      modal: 'M4'
    },
    {
      name: 'BMW M3',
      car: 'BMW-M3',
      image: 'bmw-M3.jpg',
      modal: 'M3'
    },
    {
      name: 'BMW M5',
      car: 'BMW-M5',
      image: 'bmw-m5-1.png',
      modal: 'M5'
    },
    {
      name: 'BMW M5',
      car: 'BMW-M5',
      image: 'bmw-M5-2.webp',
      modal: 'M5'
    },
    {
      name: 'BMW M5',
      car: 'BMW-M5',
      image: 'bmw-M531.webp',
      modal: 'M5'
    },
    {
      name: 'BMW M5 cs',
      car: 'BMW-M5-cs',
      image: 'bmw-m5cs-1.jpg',
      modal: 'M5'
    },
  ])
  const chooseModal = (modal) => {
    if(selectedModal == ''){
      setSelectedModal(modal)
    }
    else if(selectedModal == modal){
      setSelectedModal('')
    }
  }
  useEffect(() => {
    document.title = 'modals'
  },[])
  return (
      <div id='modals'>
      <Header />
        <div className="page-heading">
          <h1>
            All BMW{selectedModal == ''?"'s":''} {selectedModal+(selectedModal != ''?"'s":'')}
          </h1>
        </div>
        <div className="page">
        <div className="sidebar">
          <div className="header">
            <h4>Models</h4>
          </div>
          <div className="sidebar-modal">
            <div className={"modal-choice "+(selectedModal != ""?selectedModal== 'M1'?'selected':'unselected':'')} onClick={() => chooseModal('M1')} ><FontAwesomeIcon icon={selectedModal == 'M1'?faXmark:faPlus} />M1</div>
            <div className={"modal-choice "+(selectedModal != ""?selectedModal== 'M2'?'selected':'unselected':'')} onClick={() => chooseModal('M2')} ><FontAwesomeIcon icon={selectedModal == 'M2'?faXmark:faPlus} />M2</div>
            <div className={"modal-choice "+(selectedModal != ""?selectedModal== 'M3'?'selected':'unselected':'')} onClick={() => chooseModal('M3')} ><FontAwesomeIcon icon={selectedModal == 'M3'?faXmark:faPlus} />M3</div>
            <div className={"modal-choice "+(selectedModal != ""?selectedModal== 'M4'?'selected':'unselected':'')} onClick={() => chooseModal('M4')} ><FontAwesomeIcon icon={selectedModal == 'M4'?faXmark:faPlus} />M4</div>
            <div className={"modal-choice "+(selectedModal != ""?selectedModal== 'M5'?'selected':'unselected':'')} onClick={() => chooseModal('M5')} ><FontAwesomeIcon icon={selectedModal == 'M5'?faXmark:faPlus} />M5</div>
            <div className={"modal-choice "+(selectedModal != ""?selectedModal== 'M6'?'selected':'unselected':'')} onClick={() => chooseModal('M6')} ><FontAwesomeIcon icon={selectedModal == 'M6'?faXmark:faPlus} />M6</div>
          </div>
        </div>
        <div className='main'>
          <Row>
            {cars.map((car, index) => (
                car.modal == selectedModal || selectedModal == ''?(
                  <Col>
                    <div className="image-container" onClick={() => navigate('/Modal/'+car.car)}>
                      <img src={'../src/assets/gallery/'+car.image} alt="" />
                    </div>
                    <p>
                      {car.name}
                    </p>
                  </Col>
                ):('')
              ))
            }
          </Row>
        </div>
        </div>
        <Footer />
      </div>
  )
}