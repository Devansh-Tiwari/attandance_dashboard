import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    
}from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Summary Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Attandance Tracking",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Behavioral Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Academic Performance Tracking",
            icon:<FaCommentAlt/>
        },
        
    ]
    return (

<>
        <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1>
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
        <div className="container">
            
           <div style={{left: isOpen ? "0" : "-200px"}} className="sidebar">
               
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active" style={{display: isOpen ? "" : "none",opacity: isOpen ? 1: ""}}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>

        </>
    );
};

export default Sidebar;