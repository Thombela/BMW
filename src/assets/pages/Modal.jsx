import React from 'react'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'
import { useParams } from 'react-router-dom'
import '../scss/modal.scss'

export default function Modal() {
    const { car } = useParams()
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
    const vehicle = cars.find( cars => cars.car == car)
    if(Object.keys(vehicle).length > 0){
        return (
          <div id='modal'>
            <Header />
            <div className="car-image">
              <img src={'../src/assets/gallery/'+vehicle.image} alt="" />
              <h2>
                {vehicle.name}
              </h2>
              <div className="parent-buttons">
                <div className="blue-button">
                  Customize Car
                </div>
                <div className="blue-border-button">
                  Buy
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}
