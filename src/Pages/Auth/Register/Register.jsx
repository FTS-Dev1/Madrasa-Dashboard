import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// MUI | ANT-D :
import { Button, Input, Space, Select } from 'antd';

// Assets | ICONS :
import madrasa from '../../../Assets/Images/logo.png'
import logo from '../../../Assets/Images/loginLogo.png'

// API:
import { RegisterAPI } from '../../../API/auth';
// Helpers :
import { toast } from 'react-toastify';

// CSS :
import './Register.scss'





const Register = () => {
    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: null,
        password: "",
        confirmPassword: ""
    });
    const [loading, setloading] = useState(false);

    const enteringFormData = (event) => {
        let { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };
    const handleSelectChange = (value) => {
        setFormData({
            ...formData,
            role: value
        })
    };

    const handleRegister = async () => {
        setloading(true)
        let res = await RegisterAPI({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            type: formData.role,
            password: formData.password,
            password_confirmation: formData.confirmPassword
        })
        if (res.error != null) {
            toast.error(res.error);
        } else {
            toast.success(res.data.message);
            setTimeout(() => {
                Navigate("/login")
            }, 2000);
        }
        setloading(false)
    }

    const signInFun = () => {
        Navigate('/login')
    }

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
                                    <input className='registerInput' type="text" placeholder='First Name' name="firstName" onChange={enteringFormData} value={formData.firstName} />
                                    <input className='registerInput' type="text" placeholder='Last Name' name="lastName" onChange={enteringFormData} value={formData.lastName} />
                                </div>
                                <input className='registerInput' type="email" placeholder='Email' name="email" onChange={enteringFormData} value={formData.email} />
                                <input className='registerInput' type="text" placeholder='Phone Number' name="phone" onChange={enteringFormData} value={formData.phone} />
                                <div className="fields">
                                    <Select
                                        onChange={handleSelectChange}
                                        value={formData.role}
                                        placeholder="Select Role"
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
                                        <Input.Password placeholder="Enter Password" name='password' onChange={enteringFormData} value={formData.password} />
                                    </Space>
                                    <Space direction="vertical">
                                        <Input.Password placeholder="Confirm Password" name='confirmPassword' onChange={enteringFormData} value={formData.confirmPassword} />
                                    </Space>
                                </div>
                                <div className="registerButton">
                                    <Button className='register' loading={loading} onClick={handleRegister} >Register</Button>
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
