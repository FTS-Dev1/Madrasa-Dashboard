import React from 'react'

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
    toast.warn("Logout Success");
    setTimeout(() => {
        window.location.href = "/"
    }, 2000);
}
const text =
    <div className='popoverHeading'>
        <div className='name'>Morgan Freeman</div>
        <div className="skill" style={{ fontSize: "0.75rem" }}>Backend Engineer</div>
    </div>;
const content = (
    <div className='antPopover'>
        <div className="border"></div>
        <div className='popoverItem' href="#">
            <AiOutlineUser className='icon' />
            <p>Contact</p>
        </div>
        <div className='popoverItem' href="#">
            <AiFillSetting className='icon' />
            Add Account
        </div>
        <div className='popoverItem' href="#">
            <AiFillSetting className='icon' />
            Reset Password
        </div>
        <div className='popoverItem' href="#">
            <AiFillSetting className='icon' />
            Help
        </div>
        <div className="border"></div>
        <div className='popoverItem' onClick={logout}>
            <AiFillSetting className='icon' />
            Logout
        </div>
        <form action="" ></form>
    </div>
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
