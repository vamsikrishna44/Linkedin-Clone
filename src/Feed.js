import React,{useState, useEffect} from 'react';
import "./Feed.css";
import Post from "./Post";
import "./Post.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from "./InputOptions";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import {db} from "./firebase";
// eslint-disable-next-line no-unused-vars
import firebase from "./firebase";
import { serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import { Avatar } from '@mui/material';
import FlipMove from 'react-flip-move';

function Feed() {
  const user=useSelector(selectUser);
  
   const [input,setInput]=useState("");

   const [posts,setPosts] =useState([]);
   useEffect(()=>{
      db.collection("posts")
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot)=>
        setPosts(
          snapshot.docs.map((doc) =>({
          id: doc.id,
          
          data: doc.data(),


        }))
        )
        );
      },[]);
      

    const sendPost= (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name:user.displayName,
      description:user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
      
    });
    setInput("");
   };
   
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />

                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>

            </div>
            <div className="feed_inputOptions">
              <InputOptions Icon={ImageIcon}  title="Photo" color="#70B5F9"/>
              <InputOptions Icon={SubscriptionsIcon}  title="Video" color="#E7A33E"/>
              <InputOptions Icon={ EventNoteIcon}  title="Event" color="#C0CBCD"/>
              <InputOptions Icon={CalendarViewDayIcon}  title="Write Article" color="#7FC15E"/>

            </div>
           

        </div>
          <FlipMove> 
          {posts.map(({ id, data: { name, description, message, photoUrl}})=>(
              
              <Post 
                key={id}
                
                
                name={name}
                description={description}
                message={message}
                
               
                photoUrl={photoUrl}
              />
           
           

            ) )}
            
            </FlipMove>
            <Post 
              name="VamsiKrishna"
              description="Description"
              message="Message goes here"
            />
            
    </div>
  );
}


export default Feed;