import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './assets/pages/Index.jsx'
import About from './assets/pages/About.jsx'
import Cars from './assets/pages/Cars.jsx'
import Gallery from './assets/pages/Gallery.jsx'
import Contact from './assets/pages/Contact.jsx'
import Modals from './assets/pages/Modals.jsx'
import Modal from './assets/pages/Modal.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Cars' element={<Cars />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Modals/:modal' element={<Modals />}></Route>
          <Route path='/Modal/:car' element={<Modal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
