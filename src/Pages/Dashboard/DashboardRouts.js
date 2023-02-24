import React from "react";

// Assets | ICONS :
import { MdDashboard } from "react-icons/md"

// Components :
import Home from "./Components/Home/Home";
import User from "./Components/Users/User";



const getSideBarData = ({ label, key, icon, children, element }) => {
    return {
        key,
        icon,
        children,
        label,
        element
    };
}

const routsList = [
    getSideBarData({ label: 'Dashboard', key: '/', icon: <MdDashboard />, element: <Home /> }),
    getSideBarData({ label: 'Users', key: '/users', icon: <MdDashboard />, element: <User /> }),
    // getSideBarData('Team', 'sub2', <TeamOutlined />, [getSideBarData('Team 1', '6'), getSideBarData('Team 2', '8')]),
];

export default routsList;