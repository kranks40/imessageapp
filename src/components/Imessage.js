import React from 'react';
import './Imessage.css'
import Sidebar from '../components/Sidebar';
import Chat from './Chat';


function Imessage() {
    return (
        <div className='imessage'>
            <Sidebar/> 
            <Chat />           
        </div>
    )
}

export default Imessage;
