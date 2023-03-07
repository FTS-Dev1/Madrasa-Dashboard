import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';

// MUI | ANT-D :
import { Button, Input, Space,Select } from 'antd';

// Assets | ICONS :
import madrasa from '../../../Assets/Images/logo.png'
import logo from '../../../Assets/Images/loginLogo.png'

// CSS :
import './Register.scss'



const Register = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const Navigate = useNavigate();
    const signInFun = () => {
        Navigate('/login')
    }
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <>
            <div className='registerContainer'>
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
                            <div className="heading">Sign Up</div>
                            <p className="para">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</p>
                            <div className="flexFields">
                                <div className="fields">
                                    <input className='registerInput' type="text" placeholder='First Name' name="email" />
                                    <input className='registerInput' type="text" placeholder='Last Name' name="password" />
                                </div>
                                <input className='registerInput' type="text" placeholder='Email' name="email" />
                                <input className='registerInput' type="text" placeholder='Phone Number' name="email" />
                                <div className="fields">
                                    <Select
                                        defaultValue="Teacher"
                                        style={{ width: 200 }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                label: 'Teacher',
                                                value: 'Teacher'
                                            },
                                            {
                                                label: 'Student',
                                                value: 'Student'
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="fields">
                                <Space direction="vertical">
                                    <Input.Password placeholder="Enter Password" />
                                </Space>
                                <Space direction="vertical">
                                    <Input.Password placeholder="Confirm Password" />
                                </Space>
                                </div>
                                <div className="registerButton">
                                    <Button className='register' >Register</Button>
                                    <p>Already have an account? <a className='signin cursor' onClick={signInFun}>Sign In</a> </p>
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

export default Register
