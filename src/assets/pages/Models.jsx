import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'
import '../scss/models.scss'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { get } from '../../functions.js'

export default function Models() {
  const navigate = useNavigate()
  const { model, car } = useParams()
  const [cars, setCars] = useState([])

  
  const [filter, setFilter] = useState({
    series: '',
    type: '',
    maxPrice: 0,
    minPrice: 0,
    engine: ''
  })
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
    const data = {
      GetAllCars: 1,
    }
    get(data).then(response => setCars(response))
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