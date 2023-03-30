//import {Avatar} from "@material-ui/core";
import React,{forwardRef} from 'react';
import "./Post.css";
import InputOptions from "./InputOptions"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import { Avatar } from '@mui/material';
//import { color } from '@mui/system';


let Post=forwardRef(({name,description,message,photoUrl}, ref)=> {
  const user=useSelector(selectUser);

  return (
    <div ref={ref} style={{backgroundColor:"white"}}  className="post">
      <div className="post_header">
        {/* <AccountCircleIcon /> */}
        {/* <img src={user.photoUrl} alt="" /> */}
        <Avatar src={photoUrl}>
            {name[0].toUpperCase()}
        </Avatar>
      
        <div className="post_info">
        
          <h2>{name}</h2>
          
          <p>{description}</p>

        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>

      </div>
      <div className='post_buttons'>
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatIcon} title="Like" color="comment" />
        <InputOptions Icon={ShareIcon} title="share" color="gray" />
        <InputOptions Icon={SendIcon} title="send" color="gray" />

      </div>

    </div>
  );
});

export default Post;