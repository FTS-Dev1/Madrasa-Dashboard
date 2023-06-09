import React, { useState, useEffect, useMemo, } from 'react'

// MUI | ANT-D :
import { Button, Divider, Segmented, Tooltip } from 'antd';

// Components :
import Table from '../Users/Component/table/Table'
import ShowPermissionModal from './Components/ShowPermissionModal/ShowPermissionModal';

// Assets | ICONS :
import { RiEdit2Fill, RiInformationLine } from 'react-icons/ri';
import { BiShow } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

// API :
import { DeleteRoleAPI, GetAllRolesAPI } from '../../../../API/user'
// Helpers :
import { toast } from "react-toastify";

//CSS
import './Roles.scss'
import ConfirmationModel from '../../../../Components/ConfirmationModel/ConfirmationModel';





const rows = [
    {
        id: 121,
        name: `Osama Aslam`,
        email: `osamaaslam029@gmail.com`,
        role: "Admin",
        action: "Actions",
    },

]
const Roles = () => {

    const edit = <span>Edit</span>;
    const remove = <span>Delete</span>;

    const [arrow, setArrow] = useState('Show');

    const [deleteConfirmation, setDeleteConfirmation] = useState({
        open: false,
        roleID: null,
        loading: false
    })

    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }

        if (arrow === 'Show') {
            return true;
        }

        return {
            pointAtCenter: true,
        };
    }, [arrow]);


    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchInput, setSearchinput] = useState("")

    const [selectedRole, setSelectedRole] = useState(null)
    const [showPermissionsModal, setShowPermissionsModal] = useState(false)
    const [reload, setReload] = useState(false)


    const handleDeleteRoleConfirmation = (role) => {
        setDeleteConfirmation({
            open: true,
            roleID: role?.id,
            loading: false
        })
    }
    const handleDeleteRole = async () => {
        setDeleteConfirmation({
            ...deleteConfirmation,
            loading: true
        })
        let res = await DeleteRoleAPI(deleteConfirmation?.roleID)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            toast.success(res.data?.message)
            setReload(!reload)
        }
        setDeleteConfirmation({
            open: false,
            roleID: null,
            loading: false
        })
    }
    const handleNotDeleteRole = () => {
        setDeleteConfirmation({
            open: false,
            roleID: null,
            loading: false
        })
    }


    const columns = [
        // {
        //     title: 'ID',
        //     dataIndex: 'id',
        //     key: 'id',
        // },
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
            align: "center",
            render: (_, data) => data?.id != 1 && <>
                <div className="actionBox">
                    <Tooltip placement="top" title={edit} arrow={mergedArrow}>
                        <div className="actionBtn" onClick={() => openRoleModel(data)}>
                            <RiEdit2Fill className='icon cursor' />
                        </div>
                    </Tooltip>
                    <Tooltip placement="top" title={remove} arrow={mergedArrow}>
                        <div className="actionBtn" onClick={() => handleDeleteRoleConfirmation(data)}>
                            <MdDelete className='icon cursor' />
                        </div>
                    </Tooltip>



                </div>
            </>

        },

    ]

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


    const onchangeSearchHandler = (event) => {
        let { value } = event.target;
        setSearchinput(value)
    }
    useEffect(() => {
        if (data) {
            setFilteredData(
                data.filter(val => val.name?.toLocaleLowerCase().includes(searchInput?.toLocaleLowerCase()))
            )
        }
    }, [data, searchInput])
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
                    <div className="heading upper">Roles</div>
                    <Button className='yellowBtn' style={{ width: "120px" }} onClick={() => openRoleModel(null)}> Add Role </Button>
                </div>
                <div className="table">
                    <Table
                        loading={loading}
                        rows={filteredData}
                        columns={columns}
                        hasSearch
                        onchangeSearchHandler={onchangeSearchHandler}
                    />
                </div>
            </div>
            <ShowPermissionModal openModal={showPermissionsModal} closeModel={closeModel} selectedRole={selectedRole} />
            <ConfirmationModel open={deleteConfirmation.open} onOk={handleDeleteRole} onCancel={handleNotDeleteRole} confirmLoading={deleteConfirmation.loading}>
                <div className="deleteModel">
                    <div className="titleBox">
                        <RiInformationLine className='icon' /> <div className="title"> Are you want to delete Role? </div>
                    </div>
                </div>
            </ConfirmationModel>
        </>
    )
}

export default Roles;