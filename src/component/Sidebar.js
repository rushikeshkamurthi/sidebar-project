import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHome} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import '../App.css'
import SidebarMenu from './SidebarMenu'
import RouteConfig from '../RouteConfig.js';
const RouteConfig1 = [
    {
        path:"/",
        name: "Home",
        icon: <FaHome />
    },
    {
        path:"/analysis",
        name: "Analysis",
        icon: <FaHome />
    },
    {
        path:"/dashboard",
        name: "Dashboard",
        icon: <RxDashboard />
    },
    {
        path:"/fileManager",
        name: "FileManager",
        icon: <FaHome />
    },
    {
        path:"/message",
        name: "Home",
        icon: <FaHome />
    },
    {
        path:"/setting",
        name: "Setting",
        icon: <FaHome />,
        subRoutes :[
            {
                path:"/setting/profile",
                name: "Profile",
                icon: <FaHome />
            },
            {
                path:"/setting/privacy",
                name: "Privacy",
                icon: <FaHome />
            },
            {
                path:"/setting/general",
                name: "General",
                icon: <FaHome />
            },
        ]
    },
    {
        path:"/user",
        name: "User",
        icon: <FaHome />
    },
    
]

function Sidebar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <div className='main-container'>
        <motion.div animate={{ width: isOpen ? "250px" : "45px" }} className='sidebar'>
            <div className='top-section'>
                {isOpen && <h1 className='logo'>
                AWS
                </h1>}
                <div className='bars'><FaBars onClick={toggle}/></div>
            </div>
            <div className='routes'>
                {RouteConfig.map((route,index) => {
                    if(route.subRoutes){
                        return (<SidebarMenu route={route}/>);
                    }

                    return(
                        <NavLink key={index} to={route.path} activeClassName='active' className='link' >
                            <div className='icon'>{route.icon}</div>
                            <div className='link-text'>{route.name}</div>
                        </NavLink>
                    ) 
                })}
                </div>
        </motion.div>
        <main>
            {children}
        </main>
    </div>
    )
}

export default Sidebar