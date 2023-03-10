import React, { useEffect, useState } from 'react'

// Components :
import Table from './Component/table/Table'

// Assets | ICONS :
import Avater from "../../../../Assets/Images/profile.jpg";

// API :
import { GetAllUsersAPI } from '../../../../API/user'
// Helpers :
import { toast } from "react-toastify";

// CSS :
import './Users.scss'





const User = () => {

    // const [rows, setRows] = useState([
    //     {
    //         id: 121,
    //         avatar: "Avatar",
    //         name: `Osama Aslam`,
    //         email: `osamaaslam029@gmail.com`,
    //         phone: "03045064423",
    //         role: "Admin",
    //         action: "Actions",
    //     },
    //     {
    //         id: 122,
    //         avatar: "Avatar",
    //         name: `Junaid Latif`,
    //         email: `junaidlatif004@gmail.com`,
    //         phone: "03174919167",
    //         role: "Admin",
    //         action: "Actions",
    //     },
    //     {
    //         id: 123,
    //         avatar: "Avatar",
    //         name: `Sufyan Aslam`,
    //         email: `sufyanaslam029@gmail.com`,
    //         phone: "03134645127",
    //         role: "User",
    //         action: "Actions",
    //     },
    //     {
    //         id: 124,
    //         avatar: "Avatar",
    //         name: `Zahid Ghafoor`,
    //         email: `zahidghafoor@gmail.com`,
    //         phone: "03004050167",
    //         role: "Admin",
    //         action: "Actions",
    //     },
    //     {
    //         id: 125,
    //         avatar: "Avatar",
    //         name: `Hammad`,
    //         email: `hadi200@gmail.com`,
    //         phone: "03134645127",
    //         role: "User",
    //         action: "Actions",
    //     },
    //     {
    //         id: 126,
    //         avatar: "Avatar",
    //         name: `Shahzaib`,
    //         email: `shahzaib029@gmail.com`,
    //         phone: "03045064423",
    //         role: "Admin",
    //         action: "Actions",
    //     },
    //     {
    //         id: 127,
    //         avatar: "Avatar",
    //         name: `Zulifqar`,
    //         email: `zulifqar004@gmail.com`,
    //         phone: "03174919167",
    //         role: "User",
    //         action: "Actions",
    //     },
    //     {
    //         id: 128,
    //         avatar: "Avatar",
    //         name: `Gazanfar`,
    //         email: `osamaaslam029@gmail.com`,
    //         phone: "03045064423",
    //         role: "Admin",
    //         action: "Actions",
    //     },
    //     {
    //         id: 129,
    //         avatar: "Avatar",
    //         name: `Sohail`,
    //         email: `zahidghafoor@gmail.com`,
    //         phone: "03004050167",
    //         role: "Admin",
    //         action: "Actions",
    //     },
    //     {
    //         id: 130,
    //         avatar: "Avatar",
    //         name: `Asad`,
    //         email: `junaidlatif004@gmail.com`,
    //         phone: "03174919167",
    //         role: "Admin",
    //         action: "Actions",
    //     },

    // ])

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
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (_, data) => <> <div className="avaterBox"> <img src={Avater} alt="ERROR" /> </div> </>
        },
        {
            title: 'Name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (_, data) => `${data?.firstName} ${data.lastName}`,
            sorter: (a, b) => a.firstName.localeCompare(b.firstName),

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
            align: "center",
        },

    ]



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

    const searchHandler = (event) => {
        let filteredData = data.filter((a) =>
            a.name?.toLowerCase()?.includes(event) ||
            a.email?.toLowerCase()?.includes(event)
        )

        setFilteredData(filteredData)
    }

    return (

        <>
            <div className="dashboardUsersContainer">
                <div className="heading">Users</div>
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
        </>
    )
}

export default User;