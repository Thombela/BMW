import React, { useEffect } from 'react'
import { useUserData } from '../Data/session'
import { useNavigate } from 'react-router-dom'
import Header from '../sharedComponents/header'
import Footer from '../sharedComponents/footer'
import { Row, Col } from 'react-bootstrap'
import '../scss/dashboard.scss'

export default function Dashboard() {
  const navigate =useNavigate()
  const {userData, setUserData} = useUserData()
  const email = localStorage.getItem('email')
  useEffect(() =>{
    if(userData.email == '' && email == ''){
      navigate('/SignIn')
    }
    else if(userData.email == '' && email != ''){
      setUserData({...userData, email: email})
    }
  },[])
  return (
    <div id='dashboard'>
      <Header />
      <div className="profile">
        <Row>
          <Col>
          </Col>
          <Col>
          <Row>
            <Col>
              <h1>
                {userData.name}
              </h1>
            </Col>
            <Col>
              <img src={'../src/assets/images/'+userData.profile_photo} className='avatar-lg' />
            </Col>
          </Row>
          </Col>
        </Row>
      </div>
      <div className="dashboard"></div>
      <Footer />
    </div>
  )
}
