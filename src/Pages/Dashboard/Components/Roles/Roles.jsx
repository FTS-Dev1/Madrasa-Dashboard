import React, { useState, useEffect } from 'react'

// Components :
import Table from '../Users/Component/table/Table'
import ShowPermissionModal from '../../../../Components/ShowPermissionModal/ShowPermissionModal';

// Assets | ICONS :
import { RiEdit2Fill } from 'react-icons/ri';
import { BiShow } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

// API :
import { GetAllUsersAPI } from '../../../../API/user'
// Helpers :
import { toast } from "react-toastify";

//CSS
import './Roles.scss'



const Roles = () => {
    const [showPermissionsModal, setShowPermissionsModal] = useState(false)
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
            render: (_, data) => `${data?.firstName} ${data.lastName}`,
            sorter: (a, b) => a.data.localeCompare(b.data),

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'type',
            key: 'type',
            sorter: (c, d) => c.type.localeCompare(d.type)
        },
        // {
        //     title: 'Status',
        //     dataIndex: 'state',
        //     key: 'state',
        //     render:(_,data) => console.log("**********************" , data),
        //     // sorter: (c, d) => c.role.localeCompare(d.role)
        // },
        {
            title: 'Actions',
            dataIndex: 'action',
            key: 'action',
            render: (_, data) => <>
                <div className="actionBox">
                    <div className="actionBtn">
                        <RiEdit2Fill className='icon cursor' onClick={() => setShowPermissionsModal(true)} />
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

    const gettingAllUsers = async () => {
        setLoading(true)
        let res = await GetAllUsersAPI()
        if (res.error != null) {
            toast.error(res.error);
        } else {
            setData(res?.data?.data?.users || [])
            setFilteredData(res?.data?.data?.users || [])
        }
        setLoading(false)
    }
    useEffect(() => {
        gettingAllUsers()
    }, [])
    return (
        <>
            <div className="rolesContainer">
                <div className="heading">Roles</div>
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
            <ShowPermissionModal openModal={showPermissionsModal} setOpenModal={setShowPermissionsModal} />
        </>
    )
}

export default Roles 
