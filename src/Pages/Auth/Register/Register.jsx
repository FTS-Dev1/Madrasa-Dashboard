import React, { useState } from 'react'

import { Button } from 'antd'

import madrasa from '../../../Assets/Images/logo.png'
import logo from '../../../Assets/Images/loginLogo.png'

import './Register.scss'



const Register = () => {
    const [loading, setloading] = useState(false)

    const loadingFun = () => {
        setloading(true)
    }
    return (
        <>
            <div className='register-container'>
                <div className="left-section">
                    <div className="login-bio">
                        <div className="n-logo">
                            <img src={madrasa} alt="" />
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="content">
                            <div className="heading">A few more clicks to sign in to your account.
                            </div>
                            <p className="para">Manage all your e-commerce accounts in one place</p>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <form action="users" method='post'>
                        <div className="wrap-container">
                            <div className="heading">Sign Up</div>
                            <p className="para">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</p>
                            <div className="f-fields">
                                <input className='s-input' type="text" placeholder='Email' name="email" />
                                <input className='s-input' type="password" placeholder='Password' name="password" />
                                <input className='s-input' type="password" placeholder='Password' name="password" />
                                <input className='s-input' type="password" placeholder='Password' name="password" />
                                <div className="s-buttons">
                                    {/* <Button loading={loading} className='login' onClick={loadingFun}>Login</Button> */}
                                    <Button className='register' >Register</Button>
                                </div>
                            </div>
                            <p className='terms'>By signin up, you agree to our <a href=''>Terms and Conditions</a> & <a href=''>Privacy Policy</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
