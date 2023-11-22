import React from 'react'
import Header from '../sharedComponents/header.jsx'
import Footer from '../sharedComponents/footer.jsx'

export default function Gallery() {
  return (
    <div>
      <Header />
      <img src='../gallery/m5cs-1.jpg' />
      <video  width="750" height="500" controls >
        <source src="./src/assets/gallery/video.mp4" type="video/mp4"/>
      </video>
      <Footer />
    </div>
  )
}
