import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

// MUI | ANT-D :
import { Drawer } from 'antd';

// Asstets | ICONS :
import { HiMenuAlt2 } from 'react-icons/hi';
import { ReactComponent as NavSearch } from '../../Assets/Images/navSearch.svg';
import { ReactComponent as Shopping } from '../../Assets/Images/shop.svg';
import logo from '../../Assets/Images/logos.png'

// CSS :
import './Navbar.scss'





const Navbar = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const location = useLocation();

    const navbarColor = {
        color: "black",
        fill: "black",
        stroke: "black"
    }
    if (location.pathname === '/categories') {
        navbarColor.color = '#fff';
        navbarColor.fill = "#fff";
        navbarColor.stroke = "#fff";
    }
    else if (location.pathname === '/blog') {
        navbarColor.color = '#fff';
        navbarColor.fill = "#fff";
        navbarColor.stroke = "#fff";
    }

    return (
        <div className="navbar-container">
            <div className="navbar container" >
                <div className="logo">
                    <a>
                        {/* <Logo /> */}
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="webmenu" >
                    <NavLink to='/' style={navbarColor}>Home</NavLink>
                    <NavLink to='/blogs' style={navbarColor}>Blogs</NavLink>
                    <NavLink to='/categories' style={navbarColor}>Categories</NavLink>
                    <NavLink to='/about' style={navbarColor}>About Us</NavLink>
                    <NavLink to='/contact' style={navbarColor}>Contact  Us</NavLink>
                    <NavLink to='/search'><NavSearch style={navbarColor} /></NavLink>
                    <NavLink to='/shopping'><Shopping style={navbarColor} /></NavLink>
                    {/* <PrimaryButton heading="Register" primary={myFun} /> */}
                </div>
                <div className="mobilemenu">
                    <HiMenuAlt2 className='icon' onClick={showDrawer} />
                    <Drawer
                        closeIcon='true'
                        title="Logo"
                        placement="left"
                        onClose={onClose}
                        open={open}
                        width={300}
                        theme="light"
                    >

                        <div className="flex-menu" >
                            <NavLink to='/' style={{ color: navbarColor }}>Home</NavLink>
                            <NavLink to='/blogs' style={{ color: navbarColor }}>Blogs</NavLink>
                            <NavLink to='/categories' style={{ color: navbarColor }}>Categories</NavLink>
                            <NavLink to='/about' style={{ color: navbarColor }}>About Us</NavLink>
                            <NavLink to='/contact' style={{ color: navbarColor }}>Contact  Us</NavLink>
                            <NavLink to='/search'><NavSearch style={{ fill: navbarColor }} /></NavLink>
                            <NavLink to='/shopping'><Shopping style={{ stroke: navbarColor }} /></NavLink>
                            {/* <PrimaryButton heading="Register" primary={myFun} /> */}
                        </div>

                    </Drawer>
                </div>
            </div>
        </div >
    )
}

export default Navbar;