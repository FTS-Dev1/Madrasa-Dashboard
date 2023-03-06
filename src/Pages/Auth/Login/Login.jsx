import React, { useState } from 'react'

// MUI | ANT-D :
import { Button } from 'antd'

// Assets | ICONS :
import madrasa from '../../../Assets/Images/logo.png'
import logo from '../../../Assets/Images/logo.svg'

// API :
import { LoginAPI } from "../../../API/auth";
// helpers :
import { toast } from 'react-toastify';

// CSS :
import "./Login.scss"





const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [loading, setloading] = useState(false)

    const enteringFormData = (event) => {
        let { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }
    const loadingFun = async () => {
        let res = await LoginAPI({ email: formData, password: formData.password })
        if (res.error != null) {
            toast.error(res.error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.success("Login Success", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            let token = res.data.token.plainTextToken
            localStorage.setItem("madrasaToken", token)
            setTimeout(() => {
                window.location.href = "/"
            }, 3000);
        }
    }
    return (
        <>
            <div className='login-container'>
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
                            <div className="heading">Sign In</div>
                            <p className="para">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</p>
                            <div className="f-fields">
                                <input className='s-input' type="text" placeholder='Email' name="email" onChange={enteringFormData} value={formData.email} />
                                <input className='s-input' type="password" placeholder='Password' name="password" onChange={enteringFormData} value={formData.password} />
                                <div className="remember-me">
                                    <div className="check-box">
                                        <input type="checkbox" />
                                        <p>Remember me</p>
                                    </div>
                                    <p>Forgot Password?</p>
                                </div>
                                <div className="s-buttons">
                                    <Button loading={loading} className='login' onClick={loadingFun}>Login</Button>
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

export default Login