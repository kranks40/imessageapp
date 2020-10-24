import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../utils/firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login__logo">
                <img
                src='https://www.logolynx.com/images/logolynx/s_7b/7b85bb5e6e26199c6af7ada1d1a5b2d5.png' alt=''
                />
                <h1>iMessage</h1>
            </div>            
            <Button onClick={signIn}>Sign In</Button>           
            
        </div>
    );
}

export default Login;

