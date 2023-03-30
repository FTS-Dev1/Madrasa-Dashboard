import React, { useEffect, useState } from 'react'
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
// CSS :
import './AccountDetails.scss'





const AccountDetails = ({ formData, setFormData, currentStep, handleChangeStep }) => {

  const Navigate = useNavigate();

  const [stepStatus, setStepStatus] = useState(false)
  const [formError, setFormError] = useState({
    firstName: null,
    lastName: null,
    email: null
  })
  const [loading, setloading] = useState(false);

  const enteringFormData = (event) => {
    let { name, value } = event.target;

    switch (name) {
      case "firstName":
        if (value.length <= 0) {
          setFormError({
            ...formError,
            firstName: "A first name is requried."
          })
        } else if (!/^[A-Za-z]*$/.test(value)) {
          setFormError({
            ...formError,
            firstName: "You can't use numbers & special characters."
          })
        } else {
          setFormError({
            ...formError,
            firstName: null
          })
        }
        break;
      case "lastName":
        if (value.length <= 0) {
          setFormError({
            ...formError,
            lastName: "A last name is requried."
          })
        } else if (!/^[A-Za-z]*$/.test(value)) {
          setFormError({
            ...formError,
            lastName: "You can't use numbers & special characters."
          })
        } else {
          setFormError({
            ...formError,
            lastName: null
          })
        }
        break;
      case "email":
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
          setFormError({
            ...formError,
            email: "Please enter a valid email address."
          })
        } else {
          setFormError({
            ...formError,
            email: null
          })
        }
        break;

      default:
        break;
    }
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleNextStep = () => {
    handleChangeStep(currentStep + 1)
  }
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
  const signInFun = () => {
    Navigate('/login')
  }


  useEffect(() => {
    if ((!formData.firstName || formError.firstName) || (!formData.lastName || formError.lastName) || (!formData.email || formError.email)) {
      setStepStatus(false)
    } else {
      setStepStatus(true)
    }
  }, [formData])

  return (
    <>
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
                <div className="heading">Create your free <br /> account</div>
                <div className="authButton">
                  <div className="google cursor"><img src={Google} alt="" /> Sign in with Google</div>
                  {/* <div className="fb cursor"><FaFacebookF style={{ color: "#fff", fontSize: "20px" }} /> Sign in with Facebook</div> */}
                </div>
                <div className="otherOption">
                  <div className="leftBorder"></div>
                  Or
                  <div className="rightBorder"></div>
                </div>
                <div className="flexFields">
                  <div className="fields">
                    <div className="field">
                      <Input className='registerInput' type="text" placeholder='First Name' name="firstName" onChange={enteringFormData} value={formData.firstName} status={formError.firstName ? "error" : "none"} />
                      {formError.firstName && <div className="errorMessage">{formError.firstName}</div>}
                    </div>
                    <div className="field">
                      <Input className='registerInput' type="text" placeholder='Last Name' name="lastName" onChange={enteringFormData} value={formData.lastName} status={formError.lastName ? "error" : "none"} />
                      {formError.lastName && <div className="errorMessage">{formError.lastName}</div>}
                    </div>
                  </div>
                  <div className="field">
                    <Input className='registerInput' type="email" placeholder='Email' name="email" onChange={enteringFormData} value={formData.email} status={formError.email ? "error" : "none"} />
                    {formError.email && <div className="errorMessage">{formError.email}</div>}
                  </div>
                  {/* <PhoneInput
                                        country={'us'}
                                        className="phoneNumberInput"
                                        value={formData.phone}
                                        onChange={(phone) => enteringFormData({ target: { name: "phone", value: phone } })}
                                    /> */}
                  {/* <div className="fields">
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
                                    </div> */}
                  {/* <div className="fields">
                                        <Space direction="vertical" style={{width:"100%"}}>
                                            <Input.Password placeholder="Enter Password" name='password' onChange={enteringFormData} value={formData.password} />
                                        </Space>
                                        <Space direction="vertical" style={{width:"100%"}}>
                                            <Input.Password placeholder="Confirm Password" name='confirmPassword' onChange={enteringFormData} value={formData.confirmPassword} />
                                        </Space>
                                    </div> */}
                  <div className="registerButton">
                    <Button disabled={!stepStatus} className='register' loading={loading} onClick={handleNextStep} >Next <RightOutlined /></Button>
                    {/* <p>Already have an account? <a className='signin cursor' onClick={signInFun}>Sign In</a> </p> */}
                  </div>
                </div>
                <p className='terms'>We’re committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time.<a>Terms and Conditions</a> & <a>Privacy Policy</a></p>
              </div>
            </form>
          </Slide>
        </div>
      </div>
    </>
  )
}

export default AccountDetails
