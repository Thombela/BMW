import React, { useEffect } from 'react'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'

export default function Gallery() {
  const cars = ([
    {
      name: 'BMW E21',
      image: 'bmw-E21.webp',
      modal: 'M3'
    },
    {
      name: 'BMW E36',
      image: 'bmw-e36.webp',
      modal: 'M3'
    },
    {
      name: 'BMW E46',
      image: 'bmw-e46.jpg',
      modal: 'M3'
    },
    {
      name: 'BMW E92',
      image: 'bmw-e92.png',
      modal: 'M3'
    },
    {
      name: 'BMW F82',
      image: 'bmw-f82.jpg',
      modal: 'M4'
    },
    {
      name: 'BMW M3',
      image: 'bmw-M3.jpg',
      modal: 'M3'
    },
    {
      name: 'BMW M5',
      image: 'bmw-m5-1.png',
      modal: 'M5'
    },
    {
      name: 'BMW M5',
      image: 'bmw-M5-2.webp',
      modal: 'M5'
    },
    {
      name: 'BMW M5',
      image: 'bmw-M531.webp',
      modal: 'M5'
    },
    {
      name: 'BMW M5 cs',
      image: 'bmw-m5cs-1.jpg',
      modal: 'M5'
    },
  ])
  useEffect(() => {
    document.title = 'Gallery'
  },[])
  return (
    <div id='gallery'>
      <Header />
      <Footer />
    </div>
  )
}
