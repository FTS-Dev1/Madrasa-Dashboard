import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

// Componets :
import AccountDetails from './AccountDetails/AccountDetails'
import EmailConfirmation from './EmailConfirmation/EmailConfirmation'
import EmailResend from './EmailResend/EmailResend';
import CreatePassword from './CreatePassword/CreatePassword'
import SelectRole from './SelectRole/SelectRole'

import './Register.scss'



const allSteps = [AccountDetails, EmailConfirmation, EmailResend, CreatePassword, SelectRole]
const Register = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "+61",
        password: "",
        type: ""
    })


    const handleChangeStep = (step) => [
        setCurrentStep(step)
    ]

    const handleStepper = (step) => {
        switch (step) {
            case 1:
                return <AccountDetails formData={formData} setFormData={setFormData} currentStep={currentStep} handleChangeStep={handleChangeStep} />
                break;
            case 2:
                return <EmailConfirmation formData={formData} setFormData={setFormData} currentStep={currentStep} handleChangeStep={handleChangeStep} />
                break;
            case 3:
                return <EmailResend formData={formData} setFormData={setFormData} currentStep={currentStep} handleChangeStep={handleChangeStep} />
                break;
            case 4:
                return <CreatePassword formData={formData} setFormData={setFormData} currentStep={currentStep} handleChangeStep={handleChangeStep} />
                break;
            case 4:
                return <SelectRole formData={formData} setFormData={setFormData} currentStep={currentStep} handleChangeStep={handleChangeStep} />
                break;
            default:
                return <AccountDetails formData={formData} setFormData={setFormData} currentStep={currentStep} handleChangeStep={handleChangeStep} />
                break;
        }
    }

    return (
        <>
            {handleStepper(currentStep)}
        </>
    )
}

export default Register
