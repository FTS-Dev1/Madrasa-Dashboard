import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

// Componets :
import CreateAccount from '../Register/CreateAccount/CreateAccount'
import RegisterEmail from '../Register/RegisterEmail/RegisterEmail'
import RegisterPassword from '../Register//RegisterPassword/RegisterPassword'
import RegisterRole from '../Register/RegisterRole/RegisterRole'
import ConfirmationEmail from './ConfirmationEmail/ConfirmationEmail';

import './Register.scss'




const Register = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<CreateAccount />} />
                <Route path='registerEmail' element={<RegisterEmail />} />
                <Route path='confirmationEmail' element={<ConfirmationEmail />} />
                <Route path='registerPassword' element={<RegisterPassword />} />
                <Route path='registerRole' element={<RegisterRole />} />
            </Routes>
        </>
    )
}

export default Register
