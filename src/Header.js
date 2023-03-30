import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption.js";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import {auth} from "./firebase";
import { logout } from "./features/counter/userSlice";
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
//import Login from "./Login";
//import { Avatar } from "@mui/material";



function Header(){
    const user=useSelector(selectUser);

const dispatch=useDispatch();

const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();

};

    return(
        <div className="header">
           

            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""></img>

                <div className="header_search">
                    <SearchIcon />
                
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header_right">

                <HeaderOption  Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={MessageIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notificatios"/>
                
                <div onClick={logoutOfApp} className="userImage">
                
                    <img src="" alt="me" />
                    {/* <avatar src={user.photoUrl} className="header_item">{user.email[0]}</avatar> */}
                    <h3>Me</h3>
                </div>    
                {/* <Avatar onClick={logoutOfApp}  src={user.photoUrl} className="sidebar_item">
                    {user.email[0]}
                </Avatar> */}
               
                    
            </div>
            

        </div>
    );
}

export default Header;