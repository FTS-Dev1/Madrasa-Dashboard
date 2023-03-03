import React, { useState } from 'react'

// Components :
import Table from './Component/table/Table'

// CSS :
import './Users.scss'





const User = () => {

    const [rows, setRows] = useState([
        {
            id: 121,
            avatar: "Avatar",
            name: `Osama Aslam`,
            email: `osamaaslam029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 122,
            avatar: "Avatar",
            name: `Junaid Latif`,
            email: `junaidlatif004@gmail.com`,
            phone: "03174919167",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 123,
            avatar: "Avatar",
            name: `Sufyan Aslam`,
            email: `sufyanaslam029@gmail.com`,
            phone: "03134645127",
            role: "User",
            action: "Actions",
        },
        {
            id: 124,
            avatar: "Avatar",
            name: `Zahid Ghafoor`,
            email: `zahidghafoor@gmail.com`,
            phone: "03004050167",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 125,
            avatar: "Avatar",
            name: `Hammad`,
            email: `hadi200@gmail.com`,
            phone: "03134645127",
            role: "User",
            action: "Actions",
        },
        {
            id: 126,
            avatar: "Avatar",
            name: `Shahzaib`,
            email: `shahzaib029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 127,
            avatar: "Avatar",
            name: `Zulifqar`,
            email: `zulifqar004@gmail.com`,
            phone: "03174919167",
            role: "User",
            action: "Actions",
        },
        {
            id: 128,
            avatar: "Avatar",
            name: `Gazanfar`,
            email: `osamaaslam029@gmail.com`,
            phone: "03045064423",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 129,
            avatar: "Avatar",
            name: `Sohail`,
            email: `zahidghafoor@gmail.com`,
            phone: "03004050167",
            role: "Admin",
            action: "Actions",
        },
        {
            id: 130,
            avatar: "Avatar",
            name: `Asad`,
            email: `junaidlatif004@gmail.com`,
            phone: "03174919167",
            role: "Admin",
            action: "Actions",
        },

    ])

    const [filteredData, setFilteredData] = useState(rows)

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
            sorter: (a, b) => a.name.localeCompare(b.name),

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

    const searchHandler = (event) => {
        let filteredData = rows.filter((data) =>
            data.name.includes(event) ||
            data.email.includes(event)
        )

        setFilteredData(filteredData)
    }

    return (

        <>
            <div className="dashboardUsersContainer">
                <div className="heading">Users</div>
                <div className="table">
                    <Table
                        rows={filteredData}
                        columns={columns}
                        hasSearch
                        searchHandler={searchHandler}
                    />
                </div>
            </div>
        </>
    )
}

export default User;