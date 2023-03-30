import React from 'react';
import { selectUser } from './features/counter/userSlice';
import "./Sidebar.css";
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';


function Sidebar() {

    const user=useSelector(selectUser);

    const recentItem=(topic) => (
        <div className="sidebar_recentItem">
            
            <p>#{topic}</p>
        </div>


    );



  return (
    <div className="sidebar">
        <div className="sidebar_top">
        <div className="sidebar_up">
        <img className="sidebar_backimg" src="https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?size=626&ext=jpg&ga=GA1.2.1022961053.1676974502&semt=sph" alt="" />
            {/* <img className="sidebar_item" src={user.photoUrl} alt={user.displayName}/> */}
            <Avatar src={user.photoUrl} className="sidebar_item">
                {user.email[0].toUpperCase()}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div>
           
        
        <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p >Who viewed you</p>
                    <p className="sidebar_statnumber">2,354</p>
                </div>

                <div className="sidebar_stat">
                    <p>Viewes on post</p>
                    <p className="sidebar_statnumber">2,345</p>
                </div>
            </div>
        </div>  

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("software engineering")}
            {recentItem("design")}
            {recentItem("developer")}

        </div>

    </div>
  );
}

export default Sidebar;