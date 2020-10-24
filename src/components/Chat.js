import React, { useState } from 'react';
import './Chat.css';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import { IconButton } from '@material-ui/core';

function Chat() {
    const [input, setInput] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();
        setInput('')
    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <h4>
                    <span className='chat__name'>To: Channel Name</span>
                </h4>
                <strong>Details</strong>
            </div>

            <div className="chat__messages">
                <h1>I am</h1>
              
            </div>

            <div className="chat__input">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='iMessage' type='text'/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicOutlinedIcon className='chat__mic'/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;
