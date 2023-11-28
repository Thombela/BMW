import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'
import '../scss/models.scss'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Models() {
  const navigate = useNavigate()
  const { model, car } = useParams()

  const [selectedModel, setSelectedModel] = useState(model)
  const cars = ([
    {
      name: 'BMW E21',
      car: 'BMW-E21',
      image: 'bmw-e21.jpg',
      vector: 'bmw-e21-vector.png',
      model: '3 series',
      type: 'sedan',
    },
    {
      name: 'BMW E23',
      car: 'BMW-E23',
      image: 'bmw-e23.jpg',
      vector: 'bmw-e23-vector.jpg',
      model: '7 series',
      type: 'sedan',
    },
    {
      name: 'BMW E26',
      car: 'BMW-E26',
      image: 'bmw-e26.jpg',
      vector: 'bmw-e26-vector.jpg',
      model: '1 series',
      type: 'sports',
    },
    {
      name: 'BMW E28',
      car: 'BMW-E28',
      image: 'bmw-e28.jpg',
      vector: 'bmw-e28-vector.jpg',
      model: '5 series',
      type: 'sports',
    },
    {
      name: 'BMW E30',
      car: 'BMW-E30',
      image: 'bmw-e30.jpg',
      vector: 'bmw-e30-vector.jpg',
      model: '3 series',
      type: 'sports',
    },
    {
      name: 'BMW E32',
      car: 'BMW-E32',
      image: 'bmw-e32.jpg',
      vector: 'bmw-e32-vector.jpg',
      model: '7 series',
      type: 'sedan',
    },
    {
      name: 'BMW E34',
      car: 'BMW-E34',
      image: 'bmw-e34.jpg',
      vector: 'bmw-e34-vector.jpg',
      model: '5 series',
      type: 'sports',
    },
    {
      name: 'BMW E36',
      car: 'BMW-E36',
      image: 'bmw-e36.jpg',
      vector: 'bmw-e36-vector.jpg',
      model: '3 series',
      type: 'sports',
    },
    {
      name: 'BMW E38',
      car: 'BMW-E38',
      image: 'bmw-e38.jpg',
      vector: 'bmw-e38-vector.jpg',
      model: '7 series',
      type: 'sedan',
    },
    {
      name: 'BMW E39',
      car: 'BMW-E39',
      image: 'bmw-e39.jpg',
      vector: 'bmw-e39-vector.jpg',
      model: '5 series',
      type: 'sedan',
    },
    {
      name: 'BMW E46',
      car: 'BMW-E46',
      image: 'bmw-e46.jpg',
      vector: 'bmw-e46-vector.jpg',
      model: '3 series',
      type: 'sports',
    },
    {
      name: 'BMW E60',
      car: 'BMW-E60',
      image: 'bmw-e60.jpg',
      vector: 'bmw-e60-vector.jpg',
      model: '5 series',
      type: 'sports',
    },
    {
      name: 'BMW E66',
      car: 'BMW-E66',
      image: 'bmw-e66.jpg',
      vector: 'bmw-e66-vector.png',
      model: '7 series',
      type: 'sedan',
    },
    {
      name: 'BMW E81',
      car: 'BMW-E81',
      image: 'bmw-e81.jpg',
      vector: 'bmw-e81-vector.png',
      model: '1 series',
      type: 'hatchback',
    },
    {
      name: 'BMW E82',
      car: 'BMW-E82',
      image: 'bmw-e82.jpg',
      vector: 'bmw-e82-vector.jpg',
      model: '1 series',
      type: 'coupe',
    },
    {
      name: 'BMW E87',
      car: 'BMW-E87',
      image: 'bmw-e87.jpg',
      vector: 'bmw-e87-vector.png',
      model: '1 series',
      type: 'hatchback',
    },
    {
      name: 'BMW E88',
      car: 'BMW-E88',
      image: 'bmw-e88.jpg',
      vector: 'bmw-e88-vector.png',
      model: '1 series',
      type: 'convertible',
    },
    {
      name: 'BMW E92',
      car: 'BMW-E92',
      image: 'bmw-e92.jpg',
      vector: 'bmw-e92-vector.png',
      model: '3 series',
      type: 'sports',
    },
    {
      name: 'BMW F03',
      car: 'BMW-F03',
      image: 'bmw-F03.jpg',
      vector: 'bmw-F03-vector.png',
      model: '7 series',
      type: 'sedan',
    },
    {
      name: 'BMW F10',
      car: 'BMW-F10',
      image: 'bmw-F10.jpg',
      vector: 'bmw-F10-vector.jpg',
      model: '5 series',
      type: 'sports',
    },
    {
      name: 'BMW F13',
      car: 'BMW-F13',
      image: 'bmw-F13.jpg',
      vector: 'bmw-F13-vector.jpg',
      model: '6 series',
      type: 'sports',
    },
    {
      name: 'BMW F20',
      car: 'BMW-F20',
      image: 'bmw-F20.jpg',
      vector: 'bmw-F20-vector.jpg',
      model: '1 series',
      type: 'hatchback',
    },
    {
      name: 'BMW F21',
      car: 'BMW-F21',
      image: 'bmw-F21.jpg',
      vector: 'bmw-F21-vector.jpg',
      model: '1 series',
      type: 'hatchback',
    },
    {
      name: 'BMW F40',
      car: 'BMW-F40',
      image: 'bmw-F40.jpg',
      vector: 'bmw-F40-vector.jpg',
      model: '1 series',
      type: 'hatchback',
    },
    {
      name: 'BMW F80',
      car: 'BMW-F80',
      image: 'bmw-F80.jpg',
      vector: 'bmw-F80-vector.jpg',
      model: '3 series',
      type: 'sports',
    },
    {
      name: 'BMW F82',
      car: 'BMW-F82',
      image: 'bmw-F82.jpg',
      vector: 'bmw-F82-vector.jpg',
      model: '4 series',
      type: 'sports',
    },
    {
      name: 'BMW F90',
      car: 'BMW-F90',
      image: 'bmw-F90.jpg',
      vector: 'bmw-F90-vector.jpg',
      model: '5 series',
      type: 'sports',
    },
    {
      name: 'BMW G12',
      car: 'BMW-G12',
      image: 'bmw-G12.jpg',
      vector: 'bmw-G12-vector.jpg',
      model: '7 series',
      type: 'sedan',
    },
    {
      name: 'BMW G70',
      car: 'BMW-G70',
      image: 'bmw-G70.jpg',
      vector: 'bmw-G70-vector.jpg',
      model: '7 series',
      type: 'sedan',
    },
    {
      name: 'BMW G80',
      car: 'BMW-G80',
      image: 'bmw-G80.jpg',
      vector: 'bmw-G80-vector.jpg',
      model: '3 series',
      type: 'sports',
    },
    {
      name: 'BMW G00',
      car: 'BMW-G00',
      image: 'bmw-G00.jpg',
      vector: 'bmw-G00-vector.png',
      model: ' series',
      type: '',
    },
  ])
  const chooseModel = (model) => {
    if(selectedModel == ''){
      setSelectedModel(model)
    }
    else if(selectedModel == model){
      setSelectedModel('')
    }
  }
  useEffect(() => {
    document.title = 'models'
  },[])
  return (
      <div id='models'>
      <Header />
        <div className="page-heading">
          <h1>
            All BMW{selectedModel == ''?"'s":''} {selectedModel+(selectedModel != ''?"'s":'')}
          </h1>
        </div>
        <div className="page">
        <div className="sidebar">
          <div className="header">
            <h4>Models</h4>
          </div>
          <div className="sidebar-model">
            <div className={"model-choice "+(selectedModel != ""?selectedModel== 'M1'?'selected':'unselected':'')} onClick={() => chooseModel('M1')} ><FontAwesomeIcon icon={selectedModel == 'M1'?faXmark:faPlus} />M1</div>
            <div className={"model-choice "+(selectedModel != ""?selectedModel== 'M2'?'selected':'unselected':'')} onClick={() => chooseModel('M2')} ><FontAwesomeIcon icon={selectedModel == 'M2'?faXmark:faPlus} />M2</div>
            <div className={"model-choice "+(selectedModel != ""?selectedModel== 'M3'?'selected':'unselected':'')} onClick={() => chooseModel('M3')} ><FontAwesomeIcon icon={selectedModel == 'M3'?faXmark:faPlus} />M3</div>
            <div className={"model-choice "+(selectedModel != ""?selectedModel== 'M4'?'selected':'unselected':'')} onClick={() => chooseModel('M4')} ><FontAwesomeIcon icon={selectedModel == 'M4'?faXmark:faPlus} />M4</div>
            <div className={"model-choice "+(selectedModel != ""?selectedModel== 'M5'?'selected':'unselected':'')} onClick={() => chooseModel('M5')} ><FontAwesomeIcon icon={selectedModel == 'M5'?faXmark:faPlus} />M5</div>
            <div className={"model-choice "+(selectedModel != ""?selectedModel== 'M6'?'selected':'unselected':'')} onClick={() => chooseModel('M6')} ><FontAwesomeIcon icon={selectedModel == 'M6'?faXmark:faPlus} />M6</div>
          </div>
        </div>
        <div className='main'>
          <Row>
            {cars.map((car, index) => (
                car.model == selectedModel || selectedModel == ''?(
                  <Col>
                    <div className="image-container" onClick={() => navigate('/Model/'+car.car)}>
                      <img src={'../src/assets/gallery/'+car.vector} alt="" />
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