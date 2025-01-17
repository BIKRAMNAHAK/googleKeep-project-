import React, { useEffect, useState } from 'react'
import './signup.css'
import { Container, Row } from 'react-bootstrap'
import { IoPerson } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { newUserAsync } from '../../services/Actions/noteActions'
import { useNavigate } from 'react-router'
function Singup() {
    const { isSignup , errMsg } = useSelector(state => state.signup);
    console.log("isSuc",isSignup);
        const dispatch = useDispatch()
        const navigate =  useNavigate()
        const [user , setUser] = useState({
            fname : '',
            phone : '',
            email : '',
            password : ''
        })

    const handlUsers = (e) =>{
        const {name , value} = e.target
        setUser({...user , [name] : value})
    }

    const [error , setError] = useState('')

    const handleSignUp = (e) =>{
        e.preventDefault()
        dispatch(newUserAsync(user))
    }

    useEffect(()=>{
        if(isSignup){
            navigate('/login')
        }
    },[isSignup,navigate])

    useEffect(()=>{
        if(errMsg){
            setError("Your userid & password alrady exest")
        }
    },[errMsg])
    return (
        <>
               <Container fluid className="user-Form">
                <Row className='h-100 align-items-center'>
                    <div className="col-3">
                        <form className="form" onSubmit={handleSignUp}>
                            <p id="heading">SignUp</p>
                            <p className='text-danger'>{error}</p>
                            <div className="field">
                            <IoPerson />
                                <input  placeholder="Full Name" className="input-field" type="text" name="fname" value={user.fname} onChange={handlUsers} />
                            </div>

                            <div className="field">
                            <FaPhone />
                                <input  placeholder="Mobile Number" className="input-field" type="tel" name="phone" value={user.phone} onChange={handlUsers} />
                            </div>

                            <div className="field">
                                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                                </svg>
                                <input  placeholder="Email" className="input-field" type="email" name="email" value={user.email} onChange={handlUsers} />
                            </div>
                            <div className="field">
                                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                                </svg>
                                <input placeholder="Password" className="input-field" type="password" name="password" value={user.password} onChange={handlUsers} />
                            </div>
                            <div className="btn">
                                <button className="button2">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Singup
