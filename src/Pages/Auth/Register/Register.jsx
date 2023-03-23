import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

// Componets :
import AccountDetails from './AccountDetails/AccountDetails'
import EmailConfirmation from './EmailConfirmation/EmailConfirmation'
import EmailResend from './EmailResend/EmailResend';
import CreatePassword from './CreatePassword/CreatePassword'
import SelectRole from './SelectRole/SelectRole'

import './Register.scss'




const Register = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<AccountDetails />} />
                <Route path='registerEmail' element={<EmailConfirmation />} />
                <Route path='confirmationEmail' element={<EmailResend />} />
                <Route path='registerPassword' element={<CreatePassword />} />
                <Route path='registerRole' element={<SelectRole />} />
            </Routes>
        </>
    )
}

export default Register
