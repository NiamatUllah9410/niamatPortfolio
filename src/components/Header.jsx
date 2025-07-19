import React, { useState, useEffect } from "react";
import {
    MdDashboardCustomize,
    MdCastForEducation,
    MdEmail
  } from "react-icons/md";
  
import { FaUser, FaBars, FaChartBar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <MdDashboardCustomize style={{color:'black'}}/>
        },
        {
            path: '/about',
            name: 'About',
            icon: <FaUser style={{color:'#008073'}}/>
        },
        {
            path: '/skills',
            name: 'Skills',
            icon: <FaChartBar style={{color:"#9c27b0"}}/>
        },
        {
            path: '/experience',
            name: 'Experience',
            icon: <BsGraphUpArrow style={{color:"#04cbf8"}}/>
        },
        {
            path: '/projects',
            name: 'Projects',
            icon: <GoProjectSymlink style={{color:"#3f51b5"}}/>
        },
        {
            path: '/education',
            name: 'Education',
            icon: <MdCastForEducation style={{color:"#ff9800"}}/>
        },
        {
            path: '/contact',
            name: 'Contact',
            icon: <MdEmail style={{color:"#424242"}}/>
        }
    ];

    return (
        <div className="fixed h-full">
            <div className={` bg-white shadow-2xl h-full transition-all duration-500 z-20 ${isOpen ? 'w-[250px]' : 'w-[60px]'}`}>
                <div className="top-section flex items-center py-5">
                    <div>
                        <h1 className="text-[#008073] text-2xl font-bold lg:block hidden px-4">Niamat Ullah Khan</h1>
                        <h4 className="text-xl pb-2 lg:block hidden px-8">Frontend Developer</h4>
                        <hr/>
                        <div className="bars text-[30px] py-3 lg:hidden flex px-[15px]">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                </div>
                {
                    menuItems.map((item, index) => (
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            className={({ isActive }) => 
                              `link flex text-black px-[15px] py-[10px] gap-3 transition-all duration-500 hover:bg-[#008073] hover:text-white ${isActive ? 'bg-[#008073] text-white' : ''}`
                            }
                        >
                            <div className="icon text-[30px]">{item.icon}</div>
                            <div className={`linkText text-[20px] ${isOpen ? 'flex' : 'hidden'}`}>
                              {item.name}
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
}
