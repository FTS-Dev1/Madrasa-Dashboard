import React, { useState } from 'react'

// MUI | ANT-D :
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

// Assets | ICONS :
import madrasa from '../../../Assets/Images/loginLogo.png'
import logo from '../../../Assets/Images/logo.png'

// API :
import { LoginAPI } from "../../../API/auth";
// helpers :
import { toast } from 'react-toastify';

// CSS :
import "./Login.scss"
import { useNavigate } from 'react-router-dom'





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

    const Navigate = useNavigate();
    const registerFun = () => {
        Navigate('/register')
    }

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <>
            <div className='loginContainer'>
                <div className="leftSection">
                    <div className="loginBio">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="madrasaLogo">
                            <img src={madrasa} alt="" />
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

                                <Space direction="vertical">
                                    <Input.Password placeholder="input password" />
                                </Space>

                                {/* <input className='loginInput' type="password" placeholder='Password' name="password" /> */}
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