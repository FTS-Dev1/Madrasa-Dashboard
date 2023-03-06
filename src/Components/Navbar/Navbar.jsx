import React from 'react'
import { Navigate } from 'react-router-dom';

// ANT-D | MUI :
import { Popover } from 'antd';

// Assets | ICONS :
import { RiSearchLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineChevronRight } from 'react-icons/md';
import { AiOutlineUser, AiFillSetting } from 'react-icons/ai';
import logo from '../../Assets/Images/logo.png'
import profile from '../../Assets/Images/profile.jpg'

// Helpers :
import { toast } from "react-toastify";

// CSS :
import './Navbar.scss'





const logout = () => {
    localStorage.clear()
    toast.warn("Logout Success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    setTimeout(() => {
        window.location.href = "/"
    }, 3000);
}
const text =
    <div className='d-title'>
        <div className='name'>Morgan Freeman</div>
        <div className="skill">Backend Engineer</div>
    </div>;
const content = (

    <>
        <div className='d-bio'>
            <div className="border"></div>
            <a href="#">
                <AiOutlineUser className='icon' />
                <p>Contact</p>
            </a>
            <a href="#">
                <AiFillSetting className='icon' />
                Add Account
            </a>
            <a href="#" className='logout'>
                <AiFillSetting className='icon' />
                Reset Password
            </a>
            <a href="#" className='logout'>
                <AiFillSetting className='icon' />
                Help
            </a>
            <div className="border"></div>
            <div className='logout' onClick={logout}>
                <AiFillSetting className='icon' />
                Logout
            </div>

        </div>
    </>
);






const Navbar = () => {

    return (
        <>
            <div className="nav-container">
                <div className="shadow"></div>
                <div className='navbar'>
                    <div className="flex-nav">
                        <div className="left-nav">
                            <div className="logo">
                                <img src={logo} alt="" />
                                {/* <div className='heading'>Madrasa</div> */}
                            </div>
                        </div>
                        <div className="right-nav">
                            <div className="sub-menu">
                                <p>Application</p>
                                <div className="img">
                                    <MdOutlineChevronRight />
                                </div>
                                <p>Dashboard</p>
                            </div>
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
                                        placement="bottomRight" title={text} content={content} trigger="click">
                                        <div className='img'>
                                            <img src={profile} alt="" />
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
