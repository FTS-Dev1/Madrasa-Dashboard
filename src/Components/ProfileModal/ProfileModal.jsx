import React, { useState } from 'react'
// MUI | ANT-D :
import { Modal, Box } from "@mui/material"
// Assets | Ant-D :
import { AiFillCloseCircle } from "react-icons/ai"


import { useNavigate } from 'react-router-dom';

// MUI | ANT-D :
import { Button, Input, Space, Select } from 'antd';

// API:
import { RegisterAPI } from '../../API/auth';
// Helpers :
import { toast } from 'react-toastify';

// CSS :
import "./ProfileModal.scss"

const defaultStyle = {
    position: 'absolute',
    top: '10%',
    left: '20%',
    right: '20%',
    bottom: '20%',
    // transform: 'translate(-50%, -50%)',
    // width: 350,
    // height: 540,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: ".5rem",
    py: 2,
    px: 2,
    zIndex:"500",
    borderColor:"var(--themeColorGreen)",
    height:"fit-content"

}







const ProfileModal = ({ openModal, setOpenModal }) => {

    const handleClose = () => {
        setOpenModal(false)
    }
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

    return (
        <>
            <Modal
                open={openModal}
                onClose={handleClose}
            >
                <Box sx={defaultStyle}>
                    <div className="close" onClick={handleClose}>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                    <div className='profileContainer'>
                        <form action="users" method='post'>
                            <div className="wrapContainer">
                                <div className="heading">Create New User</div>
                                <div className="flexFields">
                                    <div className="fields">
                                        <input className='registerInput' type="text" placeholder='First Name' name="firstName" onChange={enteringFormData} value={formData.firstName} />
                                        <input className='registerInput' type="text" placeholder='Last Name' name="lastName" onChange={enteringFormData} value={formData.lastName} />
                                    </div>
                                    <input className='registerInput' type="email" placeholder='Email' name="email" onChange={enteringFormData} value={formData.email} />
                                    <input className='registerInput' type="text" placeholder='Phone Number' name="phone" onChange={enteringFormData} value={formData.phone} />
                                    <input className='registerInput' type="text" placeholder='Type' name="type" onChange={enteringFormData} value={formData.phone} />
                                    <div className="fields">
                                        <Select
                                            // onChange={handleSelectChange}
                                            // value={formData.role}
                                            dropdownStyle={{zIndex:"5000"}}
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
                                        <Button className='register' loading={loading} onClick={handleRegister} >Create</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
export default ProfileModal