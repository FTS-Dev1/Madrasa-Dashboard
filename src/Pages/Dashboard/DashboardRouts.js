import React from "react";

// Assets | ICONS :
import { MdDashboard } from "react-icons/md"
import { FiUsers } from "react-icons/fi"
import { SiBloglovin } from "react-icons/si"
import { HiUserGroup } from "react-icons/hi"

// Components :
import Home from "./Components/Home/Home";
import User from "./Components/Users/User";
import Blogs from "./Components/Blogs/Blogs";
import Roles from "./Components/Roles/Roles";


const ROLES = {
    Admin: "Admin",
    SuperAdmin: "SuperAdmin",
    Student: "Student",
    Teacher: "Teacher",
    No: "no"
}
const getSideBarData = ({ label, key, icon, children, element, role }) => {
    return {
        key,
        icon,
        children,
        label,
        element,
        role
    };
}

const routsList = [
    getSideBarData({ label: 'Dashboard', key: '/', icon: <MdDashboard />, element: <Home />, role: [ROLES.Admin, ROLES.SuperAdmin, ROLES.Student, ROLES.Teacher] }),
    getSideBarData({ label: 'Roles', key: '/roles', icon: <HiUserGroup />, element: <Roles />, role: [ROLES.Admin, ROLES.SuperAdmin] }),
    getSideBarData({ label: 'Users', key: '/users', icon: <FiUsers />, element: <User />, role: [ROLES.Admin, ROLES.SuperAdmin] }),
    getSideBarData({ label: 'Blogs', key: '/blogs', icon: <SiBloglovin />, element: <Blogs />, role: [ROLES.Admin, ROLES.SuperAdmin, ROLES.SuperAdmin, ROLES.Student, ROLES.Teacher] }),
    // getSideBarData({ label: 'Blogs', key: '/blogs', icon: <SiBloglovin />, element: <Blogs />, role: [ROLES.Admin, ROLES.SuperAdmin, ROLES.SuperAdmin, ROLES.Student, ROLES.Teacher] }),
    // getSideBarData('Team', 'sub2', <TeamOutlined />, [getSideBarData('Team 1', '6'), getSideBarData('Team 2', '8')]),
];

export default routsList;
export { ROLES }