import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

// MUI | ANT-D :
import { Layout, Menu } from "antd"

// Asstets | ICONS :
import Logo from "../../Assets/Images/logo.png"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

// Components :
import Navbar from '../../Components/Navbar/Navbar'

// Routes :
import RoutesList, { ROLES } from "./DashboardRouts"

// CSS :
import './Dashboard.scss';
import { useSelector } from 'react-redux'




const { Sider } = Layout;
const Dashboard = () => {
    const Navigate = useNavigate()
    const Location = useLocation()

    const UserData = useSelector(state => state.userData)

    let selectedRoutes = [Location.pathname.split("/dashboard")[1] ? Location.pathname.split("/dashboard")[1] : "/"]

    const [AvailableRoutes, setAvailableRoutes] = useState([])

    const [collapsed, setCollapsed] = useState(false);

    const handleMenuClick = (menu) => {
        let path = menu?.key;
        Navigate("/dashboard" + path)
    }

    useEffect(() => {
        if (UserData) {
            let routes = RoutesList.filter(val => val.role.includes(UserData?.roles && UserData.roles.length >= 1 && UserData?.roles[0].name == "test" || UserData?.roles && UserData.roles.length >= 1 && UserData?.roles[0].name == "super-admin" ? ROLES.SuperAdmin : UserData?.roles && UserData.roles.length >= 1 && UserData?.roles[0].name == "admin" ? ROLES.SuperAdmin : UserData?.roles && UserData.roles.length >= 1 && UserData?.roles[0].name == "teacher" ? ROLES.Teacher : UserData?.roles && UserData.roles.length >= 1 && UserData?.roles[0].name == "student" ? ROLES.Student : ROLES.No))
            setAvailableRoutes(routes)
        }
    }, [UserData])
    return (
        <>
            <Navbar />
            <div className="dashboardContainer">
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width="250" className="sider" trigger={<> <div className="trig">{collapsed ? <FaAngleRight /> : <FaAngleLeft />}</div> </>}>
                    <div className="logoBox" style={{backgroundColor:"red"}}>
                        <img style={collapsed ? { width: "40px" } : {}} src={Logo} alt="ERROR" />
                    </div>
                    <Menu mode="inline" items={AvailableRoutes} onClick={handleMenuClick} selectedKeys={selectedRoutes} />
                </Sider>
                <div className="rightContainer">
                    <Routes>
                        {
                            AvailableRoutes && AvailableRoutes.map((item) => {
                                return (
                                    <Route path={item.key} element={item.element} />
                                )
                            })
                        }
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Dashboard;