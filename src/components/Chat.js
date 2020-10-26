import React, { useEffect, useState } from 'react';
import './Chat.css';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import { IconButton } from '@material-ui/core';
import Message from '../components/Message';
import { useSelector } from 'react-redux';
import db from '../utils/firebase';
import { selectChatId, selectChatName } from '../features/chatSlice';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Chat() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [ message, setMessage ] = useState([]);

    useEffect(() => {
        if (chatId) {
            db.collection('chats')
            .doc(chatId)
            .collection('message')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setMessage(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data,
                })))
            ));
        }
    }, [chatId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('chats').doc(chatId).collection('message').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        });

        setInput('')
    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <h4>
                  To: <span className='chat__name'>{chatName} </span>
                </h4>
                <strong>Details</strong>
            </div>

            <div className="chat__messages">
                <FlipMove>
                {message.map(({ id, data }) => (
                    <Message key={id} contents={data} />
                ))}
                </FlipMove>
               
              
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
