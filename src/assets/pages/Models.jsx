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

  
  const [filter, setFilter] = useState({
    series: '',
    type: '',
    maxPrice: 0,
    minPrice: 0,
    engine: ''
  })

  const cars = ([
    {
      model: 'BMW 323i E21',
      car: 'BMW-E21',
      image: 'bmw-e21.jpg',
      vector: 'bmw-e21-vector.png',
      series: '3 series',
      type: 'sedan',
      price: 300000,
      fuel: 10,
      engine: 'Inline-6',
      transmission: 'Manual',
      speed: 200,
      acceleration: 7.5,
      power: 170,
      torque: 210
    },
    {
      model: 'BMW 745i E23',
      car: 'BMW-E23',
      image: 'bmw-e23.jpg',
      vector: 'bmw-e23-vector.jpg',
      series: '7 series',
      type: 'sedan',
      price: 375000,
      fuel: 12,
      engine: 'Turbocharged Inline-6',
      transmission: 'Automatic',
      speed: 240,
      acceleration: 7,
      power: 280,
      torque: 380
    },
    {
      model: 'BMW M1 E26',
      car: 'BMW-E26',
      image: 'bmw-e26.jpg',
      vector: 'bmw-e26-vector.jpg',
      series: '1 series',
      type: 'sports',
      price: 9000000,
      fuel: 15,
      engine: 'Mid-engine Inline-6',
      transmission: 'Manual',
      speed: 265,
      acceleration: 5.2,
      power: 350,
      torque: 400
    },
    {
      model: 'BMW M5 E28',
      car: 'BMW-E28',
      image: 'bmw-e28.jpg',
      vector: 'bmw-e28-vector.jpg',
      series: '5 series',
      type: 'sports',
      price: 500000,
      fuel: 11,
      engine: 'Inline-6',
      transmission: 'Manual',
      speed: 255,
      acceleration: 6,
      power: 300,
      torque: 380
    },
    {
      model: 'BMW M3 E30',
      car: 'BMW-E30',
      image: 'bmw-e30.jpg',
      vector: 'bmw-e30-vector.jpg',
      series: '3 series',
      type: 'sports',
      price: 600000,
      fuel: 9,
      engine: 'Inline-4',
      transmission: 'Manual',
      speed: 240,
      acceleration: 6.5,
      power: 200,
      torque: 240
    },
    {
      model: 'BMW 850CSi E31',
      car: 'BMW-E31',
      image: 'bmw-e31.jpg',
      vector: 'bmw-e32-vector.jpg',
      series: '8 series',
      type: 'coupe',
      price: 900000,
      fuel: 12,
      engine: 'V12',
      transmission: 'Manual',
      speed: 250,
      acceleration: 6,
      power: 380,
      torque: 550
    },
    {
      model: 'BMW 750iL E32',
      car: 'BMW-E32',
      image: 'bmw-e32.jpg',
      vector: 'bmw-e32-vector.jpg',
      series: '7 series',
      type: 'sedan',
      price: 600000,
      fuel: 14,
      engine: 'V12',
      transmission: 'Manual',
      speed: 240,
      acceleration: 7.5,
      power: 300,
      torque: 450
    },
    {
      model: 'BMW M5 E34',
      car: 'BMW-E34',
      image: 'bmw-e34.jpg',
      vector: 'bmw-e34-vector.jpg',
      series: '5 series',
      type: 'sports',
      price: 700000,
      fuel: 11,
      engine: 'Inline-6',
      transmission: 'Manual',
      speed: 250,
      acceleration: 6,
      power: 315,
      torque: 360
    },
    {
      model: 'BMW M3 E36',
      car: 'BMW-E36',
      image: 'bmw-e36.jpg',
      vector: 'bmw-e36-vector.jpg',
      series: '3 series',
      type: 'sports',
      price: 4500000,
      fuel: 10,
      engine: 'Inline-6',
      transmission: 'Manual',
      speed: 250,
      acceleration: 5.5,
      power: 321,
      torque: 350
    },
    {
      model: 'BMW 750iL E38',
      car: 'BMW-E38',
      image: 'bmw-e38.jpg',
      vector: 'bmw-e38-vector.jpg',
      series: '7 series',
      type: 'sedan',
      price: 700000,
      fuel: 14,
      engine: 'V12',
      transmission: 'Automatic',
      speed: 250,
      acceleration: 7,
      power: 326,
      torque: 490
    },
    {
      model: 'BMW M5 E39',
      car: 'BMW-E39',
      image: 'bmw-e39.jpg',
      vector: 'bmw-e39-vector.jpg',
      series: '5 series',
      type: 'sedan',
      price: 800000,
      fuel: 12,
      engine: 'V8',
      transmission: 'Manual',
      speed: 250,
      acceleration: 4.9,
      power: 394,
      torque: 500
    },
    {
      model: 'BMW M3 E46',
      car: 'BMW-E46',
      image: 'bmw-e46.jpg',
      vector: 'bmw-e46-vector.jpg',
      series: '3 series',
      type: 'sports',
      price: 400000,
      fuel: 11,
      engine: 'Inline-6',
      transmission: 'Manual',
      speed: 250,
      acceleration: 5,
      power: 343,
      torque: 365
    },
    {
      model: 'BMW m5 E60',
      car: 'BMW-E60',
      image: 'bmw-e60.jpg',
      vector: 'bmw-e60-vector.jpg',
      series: '5 series',
      type: 'sports',
      price: 600000,
      fuel: 14,
      engine: 'v10',
      transmission: 'Manual',
      speed: 330,
      acceleration: 4.1,
      power: 500,
      torque: 520
    },
    {
      model: 'BMW 760Li E66',
      car: 'BMW-E66',
      image: 'bmw-e66.jpg',
      vector: 'bmw-e66-vector.png',
      series: '7 series',
      type: 'sedan',
      price: 700000,
      fuel: 16,
      engine: 'V12',
      transmission: 'Manual',
      speed: 250,
      acceleration: 5.5,
      power: 438,
      torque: 600
    },
    {
      model: 'BMW 130i E81',
      car: 'BMW-E81',
      image: 'bmw-e81.jpg',
      vector: 'bmw-e81-vector.png',
      series: '1 series',
      type: 'hatchback',
      price: 300000,
      fuel: 9,
      engine: '',
      transmission: 'Manual',
      speed: 250,
      acceleration: 6,
      power: 265,
      torque: 315
    },
    {
      model: 'BMW M135i E82',
      car: 'BMW-E82',
      image: 'bmw-e82.jpg',
      vector: 'bmw-e82-vector.jpg',
      series: '1 series',
      type: 'coupe',
      price: 400000,
      fuel: 10,
      engine: 'Inline-6',
      transmission: 'Automatic',
      speed: 250,
      acceleration: 4.8,
      power: 326,
      torque: 450
    },
    {
      model: 'BMW 130i E87',
      car: 'BMW-E87',
      image: 'bmw-e87.jpg',
      vector: 'bmw-e87-vector.png',
      series: '1 series',
      type: 'hatchback',
      price: 300000,
      fuel: 9,
      engine: 'Inline-6',
      transmission: 'Manual',
      speed: 250,
      acceleration: 6,
      power: 265,
      torque: 315
    },
    {
      model: 'BMW M135i E88',
      car: 'BMW-E88',
      image: 'bmw-e88.jpg',
      vector: 'bmw-e88-vector.png',
      series: '1 series',
      type: 'convertible',
      price: 450000,
      fuel: 10,
      engine: 'Inline-6',
      transmission: 'Automatic',
      speed: 250,
      acceleration: 5.3,
      power: 320,
      torque: 450
    },
    {
      model: 'BMW M3 E92',
      car: 'BMW-E92',
      image: 'bmw-e92.jpg',
      vector: 'bmw-e92-vector.png',
      series: '3 series',
      type: 'sports',
      price: 500000,
      fuel: 12,
      engine: 'V8',
      transmission: 'Manual',
      speed: 250,
      acceleration: 4.6,
      power: 414,
      torque: 400
    },
    {
      model: 'BMW F03',
      car: 'BMW-F03',
      image: 'bmw-F03.jpg',
      vector: 'bmw-F03-vector.png',
      series: '7 series',
      type: 'sedan',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F10',
      car: 'BMW-F10',
      image: 'bmw-F10.jpg',
      vector: 'bmw-F10-vector.jpg',
      series: '5 series',
      type: 'sports',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F13',
      car: 'BMW-F13',
      image: 'bmw-F13.jpg',
      vector: 'bmw-F13-vector.jpg',
      series: '6 series',
      type: 'sports',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F20',
      car: 'BMW-F20',
      image: 'bmw-F20.jpg',
      vector: 'bmw-F20-vector.jpg',
      series: '1 series',
      type: 'hatchback',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F21',
      car: 'BMW-F21',
      image: 'bmw-F21.jpg',
      vector: 'bmw-F21-vector.jpg',
      series: '1 series',
      type: 'hatchback',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F40',
      car: 'BMW-F40',
      image: 'bmw-F40.jpg',
      vector: 'bmw-F40-vector.jpg',
      series: '1 series',
      type: 'hatchback',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F80',
      car: 'BMW-F80',
      image: 'bmw-F80.jpg',
      vector: 'bmw-F80-vector.jpg',
      series: '3 series',
      type: 'sports',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F82',
      car: 'BMW-F82',
      image: 'bmw-F82.jpg',
      vector: 'bmw-F82-vector.jpg',
      series: '4 series',
      type: 'sports',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW F90',
      car: 'BMW-F90',
      image: 'bmw-F90.jpg',
      vector: 'bmw-F90-vector.jpg',
      series: '5 series',
      type: 'sports',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW G12',
      car: 'BMW-G12',
      image: 'bmw-G12.jpg',
      vector: 'bmw-G12-vector.jpg',
      series: '7 series',
      type: 'sedan',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW G70',
      car: 'BMW-G70',
      image: 'bmw-G70.jpg',
      vector: 'bmw-G70-vector.jpg',
      series: '7 series',
      type: 'sedan',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW G80',
      car: 'BMW-G80',
      image: 'bmw-G80.jpg',
      vector: 'bmw-G80-vector.jpg',
      series: '3 series',
      type: 'sports',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
    {
      model: 'BMW G00',
      car: 'BMW-G00',
      image: 'bmw-G00.jpg',
      vector: 'bmw-G00-vector.png',
      series: ' series',
      type: '',
      price: 0,
      fuel: 0,
      engine: '',
      transmission: 'Manual',
      speed: 0,
      acceleration: 0,
      power: 0,
      torque: 0
    },
  ])
  const chooseModel = (model) => {
    if(filter.series == ''){
      setFilter({
        ...filter,
        series: model
      })
    }
    else if(filter.series == model){
      setFilter({
        ...filter,
        series: ''
      })
    }
  }
  const chooseType = (model) => {
    if(filter.series == ''){
      setFilter({
        ...filter,
        series: model
      })
    }
    else if(filter.series == model){
      setFilter({
        ...filter,
        series: ''
      })
    }
  }
  const handleInput = (event) => {
    const { name, value } = event.target
    setFilter({
      ...filter,
      [name]: value
    })
  }
  useEffect(() => {
    document.title = 'models'
  },[])
  return (
      <div id='models'>
      <Header />
        <div className="page-heading">
          <h1>
            All BMW{filter.series == ''?"'s":''} {filter.series+(filter.series != ''?"'s":'')}
          </h1>
        </div>
        <div className="page">
        <div className="sidebar">
          <div className="header">
            <h4>Series</h4>
          </div>
          <div className="sidebar-model">
            <div className={"model-choice "+(filter.series != ""?filter.series == '1 series'?'selected':'unselected':'')} onClick={() => chooseModel('1 series')} ><FontAwesomeIcon icon={filter.series == '1 series'?faXmark:faPlus} />1 series</div>
            <div className={"model-choice "+(filter.series != ""?filter.series == '2 series'?'selected':'unselected':'')} onClick={() => chooseModel('2 series')} ><FontAwesomeIcon icon={filter.series == '2 series'?faXmark:faPlus} />2 series</div>
            <div className={"model-choice "+(filter.series != ""?filter.series == '3 series'?'selected':'unselected':'')} onClick={() => chooseModel('3 series')} ><FontAwesomeIcon icon={filter.series == '3 series'?faXmark:faPlus} />3 series</div>
            <div className={"model-choice "+(filter.series != ""?filter.series == '4 series'?'selected':'unselected':'')} onClick={() => chooseModel('4 series')} ><FontAwesomeIcon icon={filter.series == '4 series'?faXmark:faPlus} />4 series</div>
            <div className={"model-choice "+(filter.series != ""?filter.series == '5 series'?'selected':'unselected':'')} onClick={() => chooseModel('5 series')} ><FontAwesomeIcon icon={filter.series == '5 series'?faXmark:faPlus} />5 series</div>
            <div className={"model-choice "+(filter.series != ""?filter.series == '6 series'?'selected':'unselected':'')} onClick={() => chooseModel('6 series')} ><FontAwesomeIcon icon={filter.series == '6 series'?faXmark:faPlus} />6 series</div>
            <div className={"model-choice "+(filter.series != ""?filter.series == '7 series'?'selected':'unselected':'')} onClick={() => chooseModel('7 series')} ><FontAwesomeIcon icon={filter.series == '7 series'?faXmark:faPlus} />7 series</div>
            <div className={"model-choice "+(filter.series != ""?filter.series == '8 series'?'selected':'unselected':'')} onClick={() => chooseModel('8 series')} ><FontAwesomeIcon icon={filter.series == '8 series'?faXmark:faPlus} />8 series</div>
          </div>
          <div className="header">
            <h4>Type</h4>
          </div>
          <div className="sidebar-type">
            <div className={"model-choice "+(filter.type != ""?filter.type == 'sedan'?'selected':'unselected':'')} onClick={() => setFilter({...filter,type: 'sedan'})} ><img src='../src/assets/gallery/filter-sedan.svg' />Sedan</div>
            <div className={"model-choice "+(filter.type != ""?filter.type == 'coupe'?'selected':'unselected':'')} onClick={() => setFilter({...filter,type: 'coupe'})} ><img src='../src/assets/gallery/filter-coupe.svg' />Coupe</div>
            <div className={"model-choice "+(filter.type != ""?filter.type == 'hatchback'?'selected':'unselected':'')} onClick={() => setFilter({...filter,type: 'hatchback'})} ><img src='../src/assets/gallery/filter-hatchback.png' />Hatchback</div>
            <div className={"model-choice "+(filter.type != ""?filter.type == 'sports'?'selected':'unselected':'')} onClick={() => setFilter({...filter,type: 'sports'})} ><img src='../src/assets/gallery/filter-sports.jpg' />Sports Car</div>
          </div>
          <div className="header">
            <h4>Type</h4>
          </div>
          <input type='number' name='minPrice' value={filter.minPrice} onChange={handleInput} />
        </div>
        <div className='main'>
          <Row>
            {cars.map((car, index) => {
                var status = true
                if(filter.series != '' && car.series != filter.series){
                  status = false
                }
                if(filter.type != '' && car.type != filter.type){
                  status = false
                }
                if(status){
                  return(
                    <Col>
                      <div className="image-container" onClick={() => navigate('/Model/'+car.car)}>
                        <img src={'../src/assets/gallery/'+car.vector} alt="" />
                      </div>
                      <p>
                        {car.model}
                      </p>
                    </Col>
                  )
                }
                })
            }
          </Row>
        </div>
        </div>
        <Footer />
      </div>
  )
}