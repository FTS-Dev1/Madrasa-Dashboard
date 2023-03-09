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
import "./ShowPermissionModal.scss"
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
    borderColor: "var(--themeColorGreen)",
    height: "fit-content",
}







const ShowPermissionModal = ({ openModal, setOpenModal }) => {
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


    const arr = [
        {
            permisson: "role_list",
        },
        {
            permisson: "role_list1",
        },
        {
            permisson: "role_list2",
        },
        {
            permisson: "role_list3",
        },
        {
            permisson: "role_list4",
        },
        {
            permisson: "role_list4",
        },
        {
            permisson: "role_list4",
        },
        {
            permisson: "role_list4",
        },
        {
            permisson: "role_list",
        },
        {
            permisson: "role_list1",
        },
        {
            permisson: "role_list2",
        },
        {
            permisson: "role_list3",
        },
        {
            permisson: "role_list4",
        },
        {
            permisson: "role_list4",
        },
        {
            permisson: "role_list4",
        },
        {
            permisson: "role_list4",
        },
    ]

    return (
        <>
            <Modal
                open={openModal}
                onClose={handleClose}
            >
                <Box sx={defaultStyle}>
                    <div className="close" onClick={handleClose}>
                        <AiFillCloseCircle className='icon' />
                    </div>
                    <div className="permissionsContainer">
                        <div className="heading">Create New Role</div>
                        <div className="permissions">
                            <input type="text" className='registerInput' placeholder='User' />
                            <div className="heading">Permisson:</div>
                            <div className="flexPermissions">
                                {
                                    arr.map((data, index) => {
                                        return (
                                            <div className="permission" key={index}>
                                                {/* <input type="radio" /> */}
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <span class="slider round"></span>
                                                </label>
                                                <div className="roles">{data.permisson}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="roleButton">
                                <Button className='greenButton' loading={loading}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
export default ShowPermissionModal