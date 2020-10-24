import { Avatar, IconButton } from '@material-ui/core';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React from 'react';
import './Sidebar.css';
import SidebarChat from '../components/SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar className='sidebar__avatar'/>

            <div className="sidebar__input">
                     <SearchOutlinedIcon/>            
                <input placeholder='Search'></input>
            </div>

                <IconButton variant='outlined' className='sidebar__button'>
                    <BorderColorOutlinedIcon/>
                </IconButton>
            
            </div>

            <div className="sidebar__chat">
                <SidebarChat/>       
               
            </div>
        </div>
    )
}

export default Sidebar;
