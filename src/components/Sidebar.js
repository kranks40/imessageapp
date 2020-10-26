import { Avatar, IconButton } from '@material-ui/core';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarChat from '../components/SidebarChat';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector(selectUser)
    const [chats, setChats ] = useState([]);
   

      useEffect(() => { 
          db.collection('chats')
          .onSnapshot((snapshot) => setChats(snapshot.docs.map((doc) => ({
             id: doc.id,
              data: doc.data(),
          }))
        )
          );
      }, []);

     const addChat = () => {
         const chatName = prompt('Please enter a chat name?');
    
         if (chatName) {
             db.collection('chats').add({
                 chatName: chatName,
                 });           
             }            
         }
   

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className='sidebar__avatar'/>

            <div className="sidebar__input">
                     <SearchOutlinedIcon/>            
                <input placeholder='Search'></input>
            </div>

                <IconButton variant='outlined' className='sidebar__button'>
                    <BorderColorOutlinedIcon onClick={addChat}/>
                </IconButton>
            
            </div>

            <div className="sidebar__chat">
                {chats.map(({ id, data: { chatName } }) => (
                    <SidebarChat key={id} id={id} chatName={chatName}/>
                ))}     
               
            </div>
        </div>
    );
}

export default Sidebar;
