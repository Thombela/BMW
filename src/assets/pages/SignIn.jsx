import React, { useEffect, useState } from 'react'
import Footer from '../sharedComponents/footer'
import '../scss/signin.scss'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useUserData } from '../Data/session'
import { get } from '../../functions'

export default function SignIn() {
    const { userData, setUserData } = useUserData()
    const navigate = useNavigate()
    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
        success: ''
    })
    const handleInput = (event) => {
      const { name, value } = event.target
      setSignInData({
        ...signInData,
        [name]: value
      })
    }
    const submitForm = (event) => {
        event.preventDefault()
        const data = {
            LoginUser: 1,
            email: signInData.email,
            password: signInData.password
        }
        get(data).then(response => {
            console.log(response)
            if(response.message == 'Success'){
                setSignInData({
                    ...signInData,
                    success: 'success'
                })
                setUserData({
                    ...userData,
                    email: response.email,
                    name: response.name,
                    profile_photo: response.profile_photo,
                    cars: response.cars
                })
                localStorage.setItem('email', signInData.email)
                setTimeout(() => {
                    navigate('/Dashboard')
                }, 1000);
            }
            else{
                setSignInData({
                    ...signInData,
                    success: 'error'
                })
            }
        })
        /*const user = signIn.find(users => users.email == signInData.email)
        if(!user){
            setSignInData({
                ...signInData,
                success: 'error'
            })
        }
        else{
            setSignInData({
                ...signInData,
                success: 'success'
            })
            setUserData({
                ...userData,
                email: user.email,
                name: user.name,
                profile_photo: user.profile_photo
            })
            localStorage.setItem('email', signInData.email)
            setTimeout(() => {
                navigate('/Dashboard')
            }, 1000);
        }*/
    }
  return (
    <div id='signin'>
        <Modal show={signInData.success != ''} className='signinModal' onHide={() => setSignInData({...signInData, success: ''}) }>
            <Modal.Body className={signInData.success}>
                {signInData.success == 'success'?(
                    <p>
                        Successful Sign In
                    </p>
                ):(
                    <p>
                        Error Signing in
                    </p>)}
            </Modal.Body>
        </Modal>
        <div className="form">
            <img src='../src/assets/gallery/logo.png' />
            <form onSubmit={submitForm}>
                <div className="field">
                    <label htmlFor="">
                        <input name='email' placeholder='' value={signInData.email} onChange={handleInput} />
                        <span>Please Enter Email</span>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="">
                        <input type='password' name='password' placeholder='' value={signInData.password} onChange={handleInput} />
                        <span>Please Enter Password</span>
                    </label>
                </div>
                <button type='submit' className='button'>Sign In</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}
