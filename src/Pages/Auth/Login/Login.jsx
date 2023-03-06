import React, { useState } from 'react'

import { Button } from 'antd'

import madrasa from '../../../Assets/Images/logo.png'
import logo from '../../../Assets/Images/loginLogo.png'
// CSS :
import "./Login.scss"
import { useNavigate } from 'react-router-dom'





const Login = () => {

    const [loading, setloading] = useState(false)

    const loadingFun = () => {
        setloading(true)
    }

    const Navigate = useNavigate();
    const registerFun = () => {
        Navigate('/register')
    }
    return (
        <>
            <div className='loginContainer'>
                <div className="leftSection">
                    <div className="loginBio">
                        <div className="logo">
                            <img src={madrasa} alt="" />
                        </div>
                        <div className="madrasaLogo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="content">
                            <div className="heading">A few more clicks to sign in to your account.
                            </div>
                            <p className="para">Manage all your e-commerce accounts in one place</p>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                    <form action="users" method='post'>
                        <div className="wrapContainer">
                            <div className="heading">Sign In</div>
                            <p className="para">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</p>
                            <div className="flexFields">
                                <input className='loginInput' type="text" placeholder='Email' name="email" />
                                <input className='loginInput' type="password" placeholder='Password' name="password" />
                                <div className="rememberMe">
                                    <div className="checkbox">
                                        <input type="checkbox" />
                                        <p>Remember me</p>
                                    </div>
                                    <p>Forgot Password?</p>
                                </div>
                                <div className="loginButton">
                                    <Button loading={loading} className='login' onClick={loadingFun}>Login</Button>
                                    <p>Create an account? <a className='signup cursor' onClick={registerFun}>Register</a> </p>

                                </div>

                            </div>
                            <p className='terms'>By signin up, you agree to our <a>Terms and Conditions</a> & <a>Privacy Policy</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login