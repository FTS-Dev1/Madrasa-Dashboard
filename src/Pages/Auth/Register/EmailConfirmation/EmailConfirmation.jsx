import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// MUI | ANT-D :
import { Button, Input, Space, Select } from 'antd';
import { RightOutlined } from '@ant-design/icons'

// Assets | ICONS :
import logo from '../../../../Assets/Images/logo-old.png'
import MadrasaImage from '../../../../Assets/Images/loginLogo.png'
import Google from '../../../../Assets/Images/google.svg';
import { FaFacebookF } from 'react-icons/fa';
import { FcNext } from 'react-icons/fc';

// React Fade Animation :
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
// PhoneInput :
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

// API:
import { RegisterAPI } from '../../../../API/auth';
// Helpers :
import { toast } from 'react-toastify';


const RegisterEmail = ({ formData, setFormData, currentStep, handleChangeStep }) => {
  const Navigate = useNavigate();

  const [otpCode, setOtpCode] = useState("")
  const [otpCodeError, setOtpCodeError] = useState(null)
  const [loading, setloading] = useState(false);

  const enteringFormData = (event) => {
    let { name, value } = event.target;

    switch (name) {
      case "otpCode":
        if (value.length > 6 || value.length < 6) {
          setOtpCodeError("Your code should be composed of 6 numbers.")
        }
        break;

      default:
        break;
    }
    setFormData({
      ...otpCode,
      [name]: value
    })
  };

  const handleRegister = async () => {
    setloading(true)
    let res = await RegisterAPI({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: `+${formData.phone}`,
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

  return (
    <div className='registerContainer'>
      <div className="leftSection">
        <div className="loginBio">
          <div className="logo">
            <Fade left>
              <img src={logo} alt="" />
            </Fade>
          </div>
          <div className="madrasaLogo">
            <Fade left>
              <img src={MadrasaImage} alt="" />
            </Fade>
          </div>
          <Fade left>
            <div className="content">
              <div className="heading">A few more clicks to sign in to your account.
              </div>
              <p className="para">Manage all your e-commerce accounts in one place</p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="rightSection">
        <Slide right>
          <form action="users" method='post'>
            <div className="wrapContainer">
              <div className="heading">Check your email</div>
              <div className="verification">
                <p>Please enter the verification code we sent to:</p>
                <div className="verificationEmail">{formData.email}</div>
              </div>
              <div className="flexFields">
                <div className="field">
                  <Input.Password placeholder="Verification code" name='password' onChange={enteringFormData} value={formData.password} />
                  {otpCodeError && <div className="errorMessage">{otpCodeError}</div>}
                </div>
                <div className="registerButton">
                  <Button className='register' loading={loading} onClick={() => Navigate('/register/registerPassword')} >Verify email <RightOutlined /></Button>
                </div>
              </div>
              <div className="resendEmail terms">Don't get the email?
                <div className="resend"><a className='cursor' onClick={() => Navigate('/register/confirmationEmail')}>Resend or edit your email address</a></div>
              </div>
            </div>
          </form>
        </Slide>
      </div>
    </div>
  )
}

export default RegisterEmail 
