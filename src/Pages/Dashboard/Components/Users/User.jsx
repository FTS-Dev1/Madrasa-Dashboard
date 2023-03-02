import React, { useState } from 'react'

// Components :
import Table from '../../Components/table/Table'

import './Users.scss'


const User = () => {

    const [rows, setRows] = useState([
        {
            id: 120,
            avatar: "Avatar",
            name: `Osama Aslam`,
            email: `osamaaslam029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Junaid Latif`,
            email: `junaidlatif004@gmail.com`,
            phone: "03174919167",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Sufyan Aslam`,
            email: `sufyanaslam029@gmail.com`,
            phone: "03134645127",
            role: "User",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Zahid Ghafoor`,
            email: `zahidghafoor@gmail.com`,
            phone: "03004050167",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Sufyan Aslam`,
            email: `sufyanaslam029@gmail.com`,
            phone: "03134645127",
            role: "User",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Osama Aslam`,
            email: `osamaaslam029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Junaid Latif`,
            email: `junaidlatif004@gmail.com`,
            phone: "03174919167",
            role: "User",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Osama Aslam`,
            email: `osamaaslam029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Zahid Ghafoor`,
            email: `zahidghafoor@gmail.com`,
            phone: "03004050167",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Junaid Latif`,
            email: `junaidlatif004@gmail.com`,
            phone: "03174919167",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Osama Aslam`,
            email: `osamaaslam029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 120,
            avatar: "Avatar",
            name: `Osama Aslam`,
            email: `osamaaslam029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
    ])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            sorter: (c, d) => c.role.localeCompare(d.role)
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            key: 'action',
        },

    ]


    return (
        <>
            <div className="users-container">
                <div className="heading">Users</div>
                <div className="table">
                    <Table
                        rows={rows}
                        columns={columns}
                        hasSearch
                    />
                </div>
            </div>
        </>
    )
}

export default User;