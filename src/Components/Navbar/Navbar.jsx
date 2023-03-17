import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// ANT-D | MUI :
import { Popover } from 'antd';

// Assets | ICONS :
import { RiSearchLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineChevronRight } from 'react-icons/md';
import { AiOutlineUser, AiFillSetting } from 'react-icons/ai';
import logo from '../../Assets/Images/logo.png'
import { ReactComponent as SvgLogo } from "../../Assets/Images/logo.svg";
import profile from '../../Assets/Images/profile.jpg'

// Redux :
import { useSelector } from 'react-redux';

// Helpers :
import { toast } from "react-toastify";

// CSS :
import './Navbar.scss'
import ProfileModal from '../ProfileModal/ProfileModal';





const logout = () => {
    localStorage.clear()
    toast.warn("Logout Success");
    setTimeout(() => {
        window.location.href = "/"
    }, 500);
}

const Navbar = () => {
    const Location = useLocation()

    const UserData = useSelector(state => state.userData)

    const [paths, setPaths] = useState([])
    const [showProfileModal, setShowProfileModal] = useState(false)


    const content = (
        <div className='antPopover'>
            <div className="border"></div>
            <div className='popoverItem'>
                <AiFillSetting className='icon' />
                Add Account
            </div>
            <div className='popoverItem'>
                <AiFillSetting className='icon' />
                Reset Password
            </div>
            <div className='popoverItem'>
                <AiFillSetting className='icon' />
                Help
            </div>
            <div className="border"></div>
            <div className='popoverItem' onClick={logout}>
                <AiFillSetting className='icon' />
                Logout
            </div>
        </div>
    );

    useEffect(() => {
        let pathString = Location.pathname.split("/")

        let allDynamicPatchs = []
        let process = pathString.map((path, index) => {
            if (index >= 2) {
                allDynamicPatchs.push(path)
            }
        })
        setPaths(allDynamicPatchs)
    }, [Location.pathname])
    return (
        <>
            <div className="nav-container">
                <div className="shadow"></div>
                <div className="mixer"></div>
                <div className='navbar'>
                    <div className="flex-nav">
                        <Fade left>
                            <div className="left-nav">
                                <div className="logo">
                                    {/* <SvgLogo height={"inherit"} /> */}
                                    <img src={logo} alt="" />
                                    {/* <div className='logoHeading'>Madrasa</div> */}
                                </div>
                            </div>
                        </Fade>
                        <div className="right-nav">
                            <Fade left>
                                <div className="sub-menu">
                                    <p>Application</p>
                                    {
                                        paths.length <= 0 || paths[0] == "" ?
                                            <>
                                                <div className="img">
                                                    <MdOutlineChevronRight />
                                                </div>
                                                <p>Dashboard</p>
                                            </>
                                            :
                                            paths.map((data) => {
                                                return (
                                                    <>
                                                        <div className="img">
                                                            <MdOutlineChevronRight />
                                                        </div>
                                                        <p>{data}</p>
                                                    </>
                                                )
                                            })


                                    }
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="bio">
                                    <div className='inputfield'>
                                        <input type="text" placeholder='Search...' />
                                        <RiSearchLine className="icon" />
                                    </div>
                                    <div className='notification'>
                                        <IoMdNotificationsOutline className='icon' />
                                    </div>
                                    <div className="nav-popover">
                                        <Popover
                                            placement="bottomRight" title={
                                                <div className='popoverHeading'>
                                                    <div className='name'>{UserData?.firstName} {UserData?.lastName}</div>
                                                    <div className="skill">{UserData?.roles && UserData.roles.length >= 1 && UserData.roles[0].name?.toLocaleUpperCase()}</div>
                                                </div>
                                            } content={content} trigger="click">
                                            <div className='img'>
                                                <img src={profile} alt="" />
                                            </div>
                                        </Popover>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileModal openModal={showProfileModal} setOpenModal={setShowProfileModal} />
        </>
    )
}

export default Navbar
