import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './assets/pages/Index.jsx'
import About from './assets/pages/About.jsx'
import Cars from './assets/pages/Cars.jsx'
import Gallery from './assets/pages/Gallery.jsx'
import Contact from './assets/pages/Contact.jsx'
import Models from './assets/pages/Models.jsx'
import Model from './assets/pages/Model.jsx'
import SignIn from './assets/pages/SignIn.jsx'
import Dashboard from './assets/pages/Dashboard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserDataProvider } from './assets/Data/session.jsx'

export default function App() {
  return (
    <div>
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Index />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Cars' element={<Cars />}></Route>
            <Route path='/Gallery' element={<Gallery />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Models/:model' element={<Models />}></Route>
            <Route path='/Model/:car' element={<Model />}></Route>
            <Route path='/SignIn' element={<SignIn />}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </div>
  )
}
