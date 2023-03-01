import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// MUI | ANT-D :
import { Layout, Menu } from "antd"

// Asstets | ICONS :
import Logo from "../../Assets/Images/logo.png"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

// Components :
import Navbar from '../../Components/Navbar/Navbar'

// Routes :
import RoutesList from "./DashboardRouts"
// CSS :
import './Dashboard.scss';




const { Sider } = Layout;
const Dashboard = () => {
    const Navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false);

    const handleMenuClick = (menu) => {
        let path = menu?.key;
        Navigate("/dashboard" + path)
    }

    return (
        <>
            <Navbar />
            <div className="dashboardContainer">
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width="250" className="sider" trigger={<> <div className="trig">{collapsed ? <FaAngleRight /> : <FaAngleLeft />}</div> </>}>
                    <div className="logoBox">
                        <img style={collapsed ? { width: "40px" } : {}} src={Logo} alt="ERROR" />
                    </div>
                    <Menu defaultSelectedKeys={['/']} mode="inline" items={RoutesList} onClick={handleMenuClick} />
                </Sider>
                <div className="rightContainer">
                    <Routes>
                        {
                            RoutesList && RoutesList.map((item) => {
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