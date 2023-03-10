import React, { useState, useEffect } from 'react'

// MUI | ANT-D :
import { Button } from 'antd';

// Components :
import Table from '../Users/Component/table/Table'
import ShowPermissionModal from './Components/ShowPermissionModal/ShowPermissionModal';

// Assets | ICONS :
import { RiEdit2Fill } from 'react-icons/ri';
import { BiShow } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

// API :
import { GetAllRolesAPI } from '../../../../API/user'
// Helpers :
import { toast } from "react-toastify";

//CSS
import './Roles.scss'



const Roles = () => {

    const [rows, setRows] = useState([
        // {
        //     id: 121,
        //     name: `Osama Aslam`,
        //     email: `osamaaslam029@gmail.com`,
        //     role: "Admin",
        //     action: "Actions",
        // },

    ])

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(false)

    const [selectedRole, setSelectedRole] = useState(null)
    const [showPermissionsModal, setShowPermissionsModal] = useState(false)
    const [reload, setReload] = useState(false)


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            key: 'action',
            render: (_, data) => <>
                <div className="actionBox">
                    <div className="actionBtn">
                        <RiEdit2Fill className='icon cursor' onClick={() => openRoleModel(data)} />
                    </div>
                    <div className="actionBtn">
                        <BiShow className='icon cursor' />
                    </div>
                    <div className="actionBtn">
                        <MdDelete className='icon cursor' />
                    </div>
                </div>
            </>

        },

    ]

    const searchHandler = (event) => {
        let filteredData = rows.filter((data) =>
            data.name.includes(event) ||
            data.email.includes(event)
        )

        setFilteredData(filteredData)
    }

    const openRoleModel = (data) => {
        if (data) {
            setSelectedRole(data)
        } else {
            setSelectedRole(null)
        }
        setShowPermissionsModal(true)
    }
    const closeModel = () => {
        setShowPermissionsModal(false)
        setSelectedRole(null)
        setReload(!reload)
    }

    const gettingAllRoles = async () => {
        setLoading(true)
        let res = await GetAllRolesAPI()
        if (res.error != null) {
            toast.error(res.error);
        } else {
            let rolesData = res?.data?.data || null
            setData(rolesData?.roles || [])
            setFilteredData(rolesData?.roles || [])
        }
        setLoading(false)
    }
    useEffect(() => {
        gettingAllRoles()
    }, [reload])
    return (
        <>
            <div className="rolesContainer">
                <div className="flexLineSpace">
                    <div className="heading">Roles</div>
                    <Button className='greenBtn' style={{ width: "120px" }} onClick={() => openRoleModel(null)}> Add Role </Button>
                </div>
                <div className="table">
                    <Table
                        loading={loading}
                        rows={filteredData}
                        columns={columns}
                        hasSearch
                        searchHandler={searchHandler}
                    />
                </div>
            </div>
            <ShowPermissionModal openModal={showPermissionsModal} closeModel={closeModel} selectedRole={selectedRole} />
        </>
    )
}

export default Roles 
