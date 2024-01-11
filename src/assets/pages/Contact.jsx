import React, { useEffect, useState } from 'react'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'
import { get } from '../../functions.js'

export default function Contact() {
  const [cars, setCars] = useState([])
  useEffect(() => {
    const data = {
      GetAllCars: 1,
      GetAllBrands: 1
    }
    get(data).then(response => setCars(response))
    get(data).then(response => setCars(response))
  },[])
  if(cars.length > 0){
    return (
      <div>
        <Header />
        {cars.map((car, index) => (
          <p>
            {car.model}
          </p>
        ))}
        <Footer />
      </div>
    )
  }
  else{
    return(
      <div></div>
    )
  }
}
