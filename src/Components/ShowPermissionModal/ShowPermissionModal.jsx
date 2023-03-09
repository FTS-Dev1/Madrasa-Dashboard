import React, { useState, useEffect } from 'react'
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
import { GetAllPermissionsAPI } from '../../API/user';
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


    const [allPermissions, setAllPermissions] = useState([])
    const [loading, setLoading] = useState(false)

    const handleClose = () => {
        setOpenModal(false)
    }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: null,
        password: "",
        confirmPassword: ""
    });

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

    const gettingAllRoles = async () => {
        setLoading(true)
        let res = await GetAllPermissionsAPI()
        if (res.error != null) {
            toast.error(res.error);
        } else {
            let rolesData = res?.data || null
            setAllPermissions(rolesData?.data || [])
        }
        setLoading(false)
    }
    useEffect(() => {
        gettingAllRoles()
    }, [])
    console.log("-------------" , allPermissions);
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
                                    allPermissions.map((data, index) => {
                                        return (
                                            <div className="permission" key={index}>
                                                {/* <input type="radio" /> */}
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <span class="slider round"></span>
                                                </label>
                                                <div className="roles">{data.name}</div>
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